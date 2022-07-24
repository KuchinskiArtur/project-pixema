import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Path, SidebarTab } from "../constants/constants";
import { AuthSelector } from "../redux/reducers/authReducer";
import { setSidebarTab } from "../redux/reducers/tabReducer";

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(AuthSelector.getAuthLoading);

  const onLogoClick = () => {
    navigate(authStatus ? Path.Home : Path.Login);
    if (authStatus) {
      dispatch(setSidebarTab(SidebarTab.Home));
    }
  };

  return (
    <svg
      cursor={"pointer"}
      onClick={onLogoClick}
      width="158"
      height="40"
      viewBox="0 0 158 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.51105 9.67813L6.01623 12.8746C6.96536 11.7795 8.26658 10.8768 9.91989 10.1665C11.6038 9.45616 13.3031 9.101 15.0176 9.101C20.2225 9.101 22.8249 13.0078 22.8249 20.8213C22.8249 25.024 22.1208 27.9689 20.7124 29.6559C19.3346 31.3134 17.1608 32.1421 14.191 32.1421C11.1293 32.1421 8.60336 31.4317 6.61326 30.0111C6.76635 31.5205 6.81227 33.0892 6.75104 34.717V40H0V9.67813H5.51105ZM6.75104 16.3374V26.3707C9.13916 26.9626 10.8537 27.2586 11.8947 27.2586C13.3949 27.2586 14.4206 26.8442 14.9717 26.0155C15.5534 25.1868 15.8443 23.4554 15.8443 20.8213C15.8443 18.2464 15.584 16.515 15.0635 15.6271C14.5431 14.7096 13.6245 14.2508 12.308 14.2508C10.8078 14.2508 8.95546 14.9464 6.75104 16.3374Z"
        fill="#7B61FF"
      />
      <path
        d="M30.5907 0H33.6218C34.9383 0 35.5966 0.63633 35.5966 1.90899V4.30633C35.5966 5.57898 34.9383 6.21531 33.6218 6.21531H30.5907C29.2742 6.21531 28.6159 5.57898 28.6159 4.30633V1.90899C28.6159 0.63633 29.2742 0 30.5907 0ZM35.5047 31.5649H28.7537V9.67813H35.5047V31.5649Z"
        fill="#7B61FF"
      />
      <path
        d="M52.5823 22.3751H52.3067L46.9334 31.5649H39.9528L46.9334 20.333L40.4579 9.67813H47.3927L52.2149 18.1132H52.6741L57.4963 9.67813H64.431L57.9555 20.333L64.9362 31.5649H57.9555L52.5823 22.3751Z"
        fill="#7B61FF"
      />
      <path
        d="M83.671 22.8191H75.4963C75.7106 24.4173 76.2004 25.4976 76.9659 26.0599C77.7619 26.5927 79.0631 26.859 80.8695 26.859C83.2883 26.859 86.105 26.6963 89.3198 26.3707L89.9628 30.455C87.6053 31.5501 84.3139 32.0977 80.0888 32.0977C75.833 32.0977 72.802 31.2098 70.9956 29.434C69.1892 27.6582 68.286 24.7281 68.286 20.6437C68.286 16.3522 69.1586 13.3481 70.9037 11.6315C72.6795 9.91491 75.6493 9.0566 79.8132 9.0566C83.5791 9.0566 86.304 9.69293 87.988 10.9656C89.6719 12.2087 90.5292 14.1176 90.5598 16.6926C90.5598 18.7347 90.0087 20.2738 88.9065 21.3097C87.8349 22.3159 86.0897 22.8191 83.671 22.8191ZM75.3585 18.8679H81.788C82.6147 18.8679 83.1658 18.6755 83.4414 18.2908C83.7475 17.906 83.9006 17.3437 83.9006 16.6038C83.9006 15.5679 83.6251 14.8576 83.074 14.4728C82.5228 14.0585 81.5125 13.8513 80.0429 13.8513C78.2977 13.8513 77.1036 14.1916 76.4607 14.8724C75.8177 15.5235 75.4503 16.8553 75.3585 18.8679Z"
        fill="white"
      />
      <path
        d="M101.401 9.67813L101.86 12.8746C104.738 10.3293 107.616 9.0566 110.494 9.0566C113.556 9.0566 115.5 10.2405 116.327 12.6082C118.99 10.2405 121.746 9.0566 124.593 9.0566C126.644 9.0566 128.206 9.57455 129.278 10.6104C130.349 11.6463 130.885 13.1558 130.885 15.1387V31.5649H124.134V17.1809C124.134 16.2338 123.965 15.5679 123.629 15.1831C123.292 14.7984 122.664 14.606 121.746 14.606C121.011 14.606 120.307 14.7392 119.633 15.0055C118.96 15.2719 117.98 15.7899 116.694 16.5594V31.5649H110.173V17.1809C110.173 16.2338 109.974 15.5679 109.576 15.1831C109.208 14.7984 108.596 14.606 107.738 14.606C106.544 14.606 104.876 15.2423 102.733 16.515V31.5649H95.9816V9.67813H101.401Z"
        fill="white"
      />
      <path
        d="M137.931 14.5616L137.288 10.1221C141.36 9.41177 145.294 9.0566 149.09 9.0566C152.152 9.0566 154.403 9.66334 155.842 10.8768C157.281 12.0607 158 14.1324 158 17.0921V31.5649H152.627L151.938 28.2353C149.672 30.8102 146.886 32.0977 143.579 32.0977C141.406 32.0977 139.63 31.5501 138.252 30.455C136.874 29.3304 136.185 27.7765 136.185 25.7936V23.5738C136.185 21.8276 136.798 20.4661 138.022 19.4895C139.247 18.5128 140.946 18.0244 143.12 18.0244H151.203V17.0477C151.172 15.923 150.897 15.1683 150.376 14.7836C149.887 14.3988 148.922 14.2064 147.483 14.2064C144.972 14.2064 141.788 14.3248 137.931 14.5616ZM142.891 24.0622V24.9057C142.891 26.4151 143.778 27.1698 145.554 27.1698C147.391 27.1698 149.274 26.4595 151.203 25.0388V21.9756H145.095C143.625 22.0052 142.891 22.7007 142.891 24.0622Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
