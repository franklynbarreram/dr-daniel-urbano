import React from "react";
import {
  socialMedia,
  SocialMediaProps,
} from "../../helper/social-media.helper";

export const SocialMedia = () => {
  return (
    <div className="container-social flex gap-5 justify-center mt-14">
      {socialMedia.map((social: SocialMediaProps) => (
        <a href={social.url} key={social.id} target="_blank" rel="noreferrer">
          <div className="border border-secondary hover:bg-white rounded-full p-4">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};
