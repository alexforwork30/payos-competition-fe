export const Footer = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="border-y border-[#ACACAC] mt-16">
        <div className="container py-8 mx-auto flex justify-between">
          <div>
            <p className="pb-1">Catalog</p>
            <p className="text-[#060707] opacity-40 mt-3">Image</p>
            <p className="text-[#060707] opacity-40 mt-3">Videos</p>
            <p className="text-[#060707] opacity-40 mt-3">Illustrations</p>
            <p className="text-[#060707] opacity-40 mt-3">Free</p>
            <p className="text-[#060707] opacity-40 mt-3">3D</p>
            <p className="text-[#060707] opacity-40 mt-3">Generate</p>
          </div>
          <div>
            <p className="pb-1">Customer Info</p>
            <p className="text-[#060707] opacity-40 mt-3">About Us</p>
            <p className="text-[#060707] opacity-40 mt-3">Stockist</p>
            <p className="text-[#060707] opacity-40 mt-3">Lifestyle</p>
            <p className="text-[#060707] opacity-40 mt-3">FAQS</p>
            <p className="text-[#060707] opacity-40 mt-3">Contact</p>
            <p className="text-[#060707] opacity-40 mt-3">For Business</p>
          </div>
          <div>
            <p className="pb-1">Legal Pages</p>
            <p className="text-[#060707] opacity-40 mt-3">Deliveries & Returns</p>
            <p className="text-[#060707] opacity-40 mt-3">Term & Conditions</p>
            <p className="text-[#060707] opacity-40 mt-3">Refund Policy</p>
            <p className="text-[#060707] opacity-40 mt-3">Privacy Policy</p>
          </div>
          <div>
            <p className="pb-1">Sign Up For Updates</p>
            <input className="border p-2 w-96 block mt-4 placeholder:text-[#060707] placeholder:opacity-25" type="text" placeholder="Whats your email address?" />
            <button className="p-2 px-10 bg-[#EF9854] mt-3">Subscribe</button>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="my-8">
        <div className="flex justify-between items-center container mx-auto">
          <p>© Copy right by Group 4.</p>
          <div className="flex gap-8">
            <img src="images/fb.svg" alt="FB" className="w-6 h-6" />
            <img src="images/X.svg" alt="X" className="w-6 h-6" />
            <img src="images/insta.svg" alt="Instagram" className="w-6 h-6" />
            <img src="images/ytb.svg" alt="Youtube" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}