import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import bcrypt from 'bcrypt';

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role: 'agent' | 'manager' | 'admin';
  phone?: string;
  is_active: boolean;
  trial_start_date?: Date | null;
  trial_end_date?: Date | null;
  subscription_status: 'trial' | 'active' | 'expired' | 'cancelled';
  subscription_plan?: string | null;
  created_at?: Date;
  updated_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'role' | 'is_active' | 'subscription_status' | 'trial_start_date' | 'trial_end_date' | 'subscription_plan' | 'created_at' | 'updated_at'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password_hash!: string;
  public role!: 'agent' | 'manager' | 'admin';
  public phone!: string;
  public is_active!: boolean;
  public trial_start_date!: Date | null;
  public trial_end_date!: Date | null;
  public subscription_status!: 'trial' | 'active' | 'expired' | 'cancelled';
  public subscription_plan!: string | null;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  // Method to check password
  public async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }

  // Method to hash password before saving
  public static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  // Return user data without sensitive fields
  public toJSON(): Omit<UserAttributes, 'password_hash'> {
    const values = { ...this.get() };
    delete (values as any).password_hash;
    return values as Omit<UserAttributes, 'password_hash'>;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('agent', 'manager', 'admin'),
      defaultValue: 'agent',
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    trial_start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    trial_end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    subscription_status: {
      type: DataTypes.STRING(20),
      defaultValue: 'trial',
    },
    subscription_plan: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default User;
