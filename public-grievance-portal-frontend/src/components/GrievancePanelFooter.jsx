import { Mail, Phone, Twitter, Facebook, Instagram, Copyright } from 'lucide-react';

const GrievancePanelFooter = () => {
    return (
        <footer className="bg-primary-gray py-6">
            <div className="w-full mx-auto px-24 bg-primary-gray">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm text-font-normal">
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><a href="#" className="hover:underline">FAQs</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Support</h3>
                    <ul className="space-y-1 text-sm text-font-normal">
                    <li><a href="#" className="hover:underline">Help Center</a></li>
                    <li><a href="#" className="hover:underline">Track Grievance</a></li>
                    <li><a href="#" className="hover:underline">Report Issue</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                    <ul className="space-y-1 text-sm text-font-normal">
                    <li className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        support@grievancegateway.gov
                    </li>
                    <li className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        1800-XXX-XXXX
                    </li>
                    </ul>
                </div>

                {/* Connect With Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
                    <div className="flex space-x-3">
                    <a href="#" className="text-font-normal hover:text-font-hover">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-font-normal hover:text-font-hover">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-font-normal hover:text-font-hover">
                        <Instagram className="w-5 h-5" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex items-center gap-1 justify-center mt-4 border-t-2 border-[#ebebeb]">
                <Copyright size={16} /> 2025 Grievance Gateway Admin Portal. All rights reserved.
            </div>
        </footer>
    );
};

export default GrievancePanelFooter;