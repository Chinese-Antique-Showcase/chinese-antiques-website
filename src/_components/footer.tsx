export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-gray-800 text-lg mb-4">
              Legal Information
            </h3>
            <p className="text-gray-600 mb-2">
              <a
                href="/privacy-policy"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Privacy Policy
              </a>
            </p>
            <p className="text-gray-600 mb-2">
              <a
                href="/terms-of-service"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Terms of Service
              </a>
            </p>
            <p className="text-gray-600">
              <a
                href="/shipping-policy"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Shipping & Returns
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © {currentYear} Yang Antiques. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            All items are sold with a certificate of authenticity. Each piece is
            carefully vetted for provenance and historical accuracy.
          </p>
        </div>
      </div>
    </footer>
  );
};
