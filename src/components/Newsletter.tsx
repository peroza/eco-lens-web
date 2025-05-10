
import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email) {
      toast({
        title: "Email is required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate captcha
    if (parseInt(captchaAnswer) !== 11) {
      toast({
        title: "Incorrect answer",
        description: "The math problem answer is incorrect.",
        variant: "destructive"
      });
      return;
    }
    
    // Form submission simulation
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail('');
      setCaptchaAnswer('');
      
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
        variant: "default",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-16 bg-eco-mint-light">
      <div className="section-container">
        <h2 className="section-title">Stay updated!</h2>
        <p className="section-subtitle">
          Want to stay informed about our latest projects and upcoming programs? Enter your email below, and we'll keep you in the loop. Join us on our journey toward a more sustainable future!
        </p>
        
        <div className="mt-12 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="captcha" className="block text-gray-700 font-medium mb-2">5 + 6 =</label>
                <input
                  type="text"
                  id="captcha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                  placeholder="Enter the answer"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-eco-green hover:bg-eco-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-eco-green focus:ring-offset-2 flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : "Submit"}
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Check className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                You've successfully subscribed to our newsletter. We'll keep you updated on our latest initiatives.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
