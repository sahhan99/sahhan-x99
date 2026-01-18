import { useState } from 'react';
import { processCommand } from '../core/mainCore';

export function useChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const sendMessage = async (input: string) => {
    if (!input.trim() || isProcessing) return;

    setChatHistory(prev => [...prev, { role: 'user', text: input }]);
    setIsProcessing(true);

    const response = await processCommand(input);

    setChatHistory(prev => [...prev, { role: 'sahhan', text: response }]);
    setIsProcessing(false);
  };

  return { chatHistory, isProcessing, sendMessage };
}
