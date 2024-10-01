import React from 'react';

const Links = () => (
  <section id="links" className="bg-white p-4">
    <div className="wrapper">
    <h2 className="text-2xl font-semibold mb-4">LINKS</h2>
      <div>
        <ul className="space-y-2">
          <li>
            <a href="https://digitalgarden.dhirajyadav.site/" className="text-blue-600 hover:underline inline-flex items-center">
              Digital Garden
              &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.vlr.gg/pickem/14244ab0" className="text-blue-600 hover:underline inline-flex items-center">
              My Pick'Ems for Champions Tour 2024: Pacific Stage 1
              &nbsp;<i className="fas fa-external-link-alt ml-1 inline-icon"></i>
            </a>
          </li>
        </ul>
    </div>
    </div>
  </section>
);

export default Links;
