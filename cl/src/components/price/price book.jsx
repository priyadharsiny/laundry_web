import { useState } from 'react';
import { Star, Check, Droplet, Wind, Box, Clock } from 'lucide-react';
import km from "../../assets/images/side.webp"

export default function DryCleaningPage() {
  const [isExpanded, setIsExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-navy-900 text-black">
      <header className="bg-navy-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Dry Cleaning</h1>
          <div className="flex justify-center items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
            ))}
            <span className="ml-2">4.8 average</span>
          </div>
        </div>
      </header>

      {/* Full page in row layout */}
      <main className="container mx-auto px-4 py-8 flex flex-row gap-8">
        {/* Form Section */}
        <div className="flex-1 bg-navy-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Schedule Your Service</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="shirts" className="block text-sm font-medium">Shirts</label>
                <input type="number" id="shirts" min="0" className="w-full bg-navy-700 p-2 rounded" />
              </div>
              <div>
                <label htmlFor="pants" className="block text-sm font-medium">Pants</label>
                <input type="number" id="pants" min="0" className="w-full bg-navy-700 p-2 rounded" />
              </div>
              <div>
                <label htmlFor="dresses" className="block text-sm font-medium">Dresses</label>
                <input type="number" id="dresses" min="0" className="w-full bg-navy-700 p-2 rounded" />
              </div>
              <div>
                <label htmlFor="suits" className="block text-sm font-medium">Suits</label>
                <input type="number" id="suits" min="0" className="w-full bg-navy-700 p-2 rounded" />
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium">Pickup Date</label>
              <input type="date" id="date" className="w-full bg-navy-700 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium">Pickup Time</label>
              <select className="w-full bg-navy-700 p-2 rounded">
                <option value="" disabled>Select a time</option>
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 8PM)</option>
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium">Special Instructions</label>
              <input id="notes" className="w-full bg-navy-700 p-2 rounded" placeholder="Any special requests?" />
            </div>
            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 p-2 rounded text-white">
              Schedule Pickup
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img 
            src={km} 
            alt="Dry cleaning rack with clothes" 
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
        </div>
      </main>

      {/* Pre-Pickup Checklist and Our Process Section */}
      <section className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Pre-Pickup Checklist */}
        <div className="flex-1 bg-navy-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Pre-Pick Up Checklist</h2>
          <ul className="grid md:grid-cols-1 gap-4">
            {[
              "Empty all pockets",
              "Inform us about any stains",
              "Separate lights and darks",
              "Button up shirts",
              "Zip up zippers",
              "Remove belt from pants",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Process */}
        <div className="flex-1 bg-navy-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
          <div className="flex flex-col space-y-4">
            {[
              { icon: <Droplet className="w-8 h-8 text-sky-400" />, title: "Stain Removal" },
              { icon: <Wind className="w-8 h-8 text-sky-400" />, title: "Gentle Cleaning" },
              { icon: <Box className="w-8 h-8 text-sky-400" />, title: "Careful Packaging" },
              { icon: <Clock className="w-8 h-8 text-sky-400" />, title: "Quick Turnaround" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between space-x-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
