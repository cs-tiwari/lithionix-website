import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Lock, CreditCard, Truck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Checkout | ${COMPANY_INFO.name}`,
  description: `Secure checkout page for ${COMPANY_INFO.name}. Complete your order with our secure payment processing.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Header */}
      <section className="pt-20 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto">
              <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Secure <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Checkout</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300">
                Complete your order securely in just a few steps
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <ScrollReveal direction="up">
                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900">Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name (Optional)</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="Your Company"
                      />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Shipping Address */}
              <ScrollReveal direction="up" delay={0.1}>
                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <Truck className="h-6 w-6 text-blue-600" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Address Line 1 *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="Street address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Address Line 2</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="Apartment, suite, etc. (optional)"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">State *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">PIN Code *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="123456"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Country *</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none">
                        <option>India</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Payment Method */}
              <ScrollReveal direction="up" delay={0.2}>
                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border-2 border-blue-500 rounded-lg bg-blue-50">
                        <div className="flex items-center space-x-2">
                          <input type="radio" name="payment" id="card" checked readOnly className="h-4 w-4 text-blue-600" />
                          <label htmlFor="card" className="font-medium text-slate-900 cursor-pointer">Credit/Debit Card</label>
                        </div>
                      </div>
                      <div className="p-4 border-2 border-slate-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <input type="radio" name="payment" id="upi" className="h-4 w-4 text-blue-600" />
                          <label htmlFor="upi" className="font-medium text-slate-900 cursor-pointer">UPI / Net Banking</label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Card Number *</label>
                        <input
                          type="text"
                          required
                          maxLength={16}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Expiry Date *</label>
                          <input
                            type="text"
                            required
                            maxLength={5}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">CVV *</label>
                          <input
                            type="text"
                            required
                            maxLength={3}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Name on Card *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Terms & Privacy */}
              <ScrollReveal direction="up" delay={0.3}>
                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" id="terms" required className="h-5 w-5 mt-0.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                      <label htmlFor="terms" className="text-sm text-slate-700 cursor-pointer">
                        I agree to the <Link href="/terms-conditions" className="text-blue-600 hover:text-blue-700 font-medium underline">Terms & Conditions</Link> and <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium underline">Privacy Policy</Link> *
                      </label>
                    </div>
                    <p className="text-xs text-slate-500 pl-8">
                      By completing this purchase, you agree to our terms of service and privacy policy. Your payment information is encrypted and secure.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">Custom Software Development</p>
                          <p className="text-sm text-slate-500">Qty: 1</p>
                        </div>
                        <p className="font-semibold text-slate-900 ml-4">₹99,999</p>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Subtotal</span>
                        <span className="text-slate-900 font-medium">₹99,999</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">GST (18%)</span>
                        <span className="text-slate-900 font-medium">₹17,999.82</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-2 border-t border-slate-200">
                        <span className="text-slate-900">Total</span>
                        <span className="text-blue-600 text-xl">₹1,17,998.82</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled
                      >
                        <Lock className="h-5 w-5 mr-2" />
                        Demo Checkout
                      </Button>
                      <p className="text-xs text-center text-slate-500 bg-amber-50 border border-amber-200 rounded-lg p-2">
                        ⚠️ Payment Integration Coming Soon. This is a demo checkout page.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-center space-x-2 text-xs text-slate-600">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span>256-bit SSL Encryption</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-xs text-slate-600">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Secure Checkout</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-xs text-slate-500 mb-2">We Accept:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <div className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-slate-700">VISA</div>
                        <div className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-slate-700">MasterCard</div>
                        <div className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-slate-700">UPI</div>
                        <div className="px-3 py-1 bg-slate-100 rounded text-xs font-medium text-slate-700">Razorpay</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}