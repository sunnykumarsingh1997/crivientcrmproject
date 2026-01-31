import { useState, useRef, useEffect } from 'react';
import { HiSparkles, HiX, HiPaperAirplane, HiLightBulb, HiChartBar } from 'react-icons/hi';
import api from '../../services/api';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dashboardInsights, setDashboardInsights] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        role: 'assistant',
        content: "Hello! I'm your AI Sales Assistant. I can help you with lead intelligence, follow-up strategies, and sales tips. What would you like to know?",
        suggestions: ['Analyze my leads', 'Show hot leads', 'Follow-up tips', 'Conversion strategies'],
        timestamp: new Date()
      }]);
      fetchDashboardInsights();
    }
  }, [isOpen]);

  const fetchDashboardInsights = async () => {
    try {
      const response = await api.get('/ai/dashboard');
      setDashboardInsights(response.data);
    } catch (error) {
      console.error('Failed to fetch insights:', error);
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const userMessage = { id: Date.now().toString(), role: 'user', content: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await api.post('/ai/chat', { message: text });
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.data.message,
        suggestions: response.data.suggestions,
        timestamp: new Date()
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 ${isOpen ? 'hidden' : ''}`}
      >
        <HiSparkles className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <HiSparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Sales Assistant</h3>
                <p className="text-xs text-purple-200">Crivient CRM</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition">
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {dashboardInsights && (
            <div className="bg-purple-50 px-4 py-3 border-b border-purple-100">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <HiChartBar className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-600">Score:</span>
                  <span className="font-semibold text-purple-600">{dashboardInsights.avgScore}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <HiLightBulb className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600">Hot:</span>
                  <span className="font-semibold text-orange-500">{dashboardInsights.hotLeads}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-purple-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}>
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.suggestions.map((s, i) => (
                        <button key={i} onClick={() => sendMessage(s)}
                          className="text-xs bg-white text-purple-600 px-3 py-1.5 rounded-full border border-purple-200 hover:bg-purple-50 transition">
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about leads, sales tips..." disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm" />
              <button type="submit" disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
                <HiPaperAirplane className="w-4 h-4 transform rotate-90" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
