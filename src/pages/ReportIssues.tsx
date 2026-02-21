import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const locations = [
  "Borehole A - Main Street",
  "Tap Station - Market Square",
  "Community Well - Block C",
  "Other",
];

export default function ReportIssue() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      location,
      details,
      photo,
    };

    console.log("Submitted Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="text-sm text-gray-600 mb-6 hover:underline"
      >
        ← Back to Dashboard
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Report a Water Issue
        </h1>
        <p className="text-gray-600 mt-2">
          Help us keep your community's water safe and accessible by providing
          details below.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-3xl m-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Location / Water Point <span className="text-red-500">*</span>
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select a borehole or tap station...</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Can't find the location? Select "Other" to enter coordinates.
            </p>
          </div>

          {/* Issue Details */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Issue Details <span className="text-red-500">*</span>
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              maxLength={500}
              required
              placeholder="Describe the problem (e.g., leak, no water flow, low pressure, dirty or discolored water)..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>
                Please be as specific as possible to help our technicians.
              </span>
              <span>{details.length}/500</span>
            </div>
          </div>

          {/* Upload Photo */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Upload Photo (Optional)
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 cursor-pointer hover:bg-gray-50 transition">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={(e) =>
                  setPhoto(e.target.files ? e.target.files[0] : null)
                }
              />

              <div className="text-gray-500 text-center">
                <div className="text-2xl mb-2">📷</div>
                <p>Click to upload or drag and drop</p>
                <p className="text-sm mt-1">
                  PNG, JPG or JPEG (MAX. 5MB)
                </p>
              </div>
            </label>

            {photo && (
              <p className="text-sm text-green-600 mt-2">
                Selected: {photo.name}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition"
            >
              &gt; Submit Report
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-500 flex gap-4">
        <span>🔒 Secure Submission</span>
        <span>•</span>
        <span>🎧 24/7 Support</span>
      </div>
    </div>
  );
}