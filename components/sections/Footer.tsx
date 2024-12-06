export default function Footer() {
  return (
      <footer className="py-10 bg-[#111111] text-white relative" id={"contact"}>
        <div className="container px-4 relative z-10">
          <div className="text-center">
            <p className="text-lg font-medium font-futura-md">
              © 2024 Creators Fest. All rights reserved.
            </p>
            <p className="text-sm mt-2 font-futura-md">
              Follow us on:
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.instagram.com/creatorfest.esi/" className="text-[#00F2EA]">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
  );
}