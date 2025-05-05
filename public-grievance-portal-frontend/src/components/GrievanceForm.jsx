import { Upload, Phone } from "lucide-react";

const GrievanceForm = () => {
    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 px-24 py-4 gap-4">
            <div className="flex w-full bg-white rounded-lg shadow-lg">
                {/* Form Section */}
                <form className="w-2/3 p-6">
                    <h2 className="text-2xl font-bold mb-4">File Your Grievance</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                        type="text"
                        placeholder="Brief description of your grievance"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select department</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                        placeholder="Provide detailed information about your grievance"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Supporting Documents</label>
                        <div className="w-full p-4 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Drag and drop files here or click to upload</p>
                        </div>
                    </div>

                    <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-gray-900">
                        Submit Grievance
                    </button>
                </form>

                {/* Guidelines Section */}
                <div className="w-1/3 p-6 bg-gray-50 border-l">
                <h3 className="text-lg font-semibold mb-4">Filing Guidelines</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                    <li>Provide a clear and concise subject that describes your grievance</li>
                    <li>Select the most relevant department for your complaint</li>
                    <li>Include all relevant details in the description, including dates, locations, and previous communication</li>
                    <li>Attach supporting documents if available (photos, previous correspondence, etc.)</li>
                </ol>

                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <p className="text-sm font-medium text-gray-700">Need Assistance?</p>
                    <p className="text-sm text-gray-600">Contact our support team:</p>
                    <div className="flex items-center mt-1">
                    <Phone className="w-4 h-4 text-gray-600 mr-2" />
                    <p className="text-sm text-gray-600">1800-XXX-XXXX</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default GrievanceForm;