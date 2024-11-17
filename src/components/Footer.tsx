
import { Link } from "react-router-dom"


const Footer = () => {
  return (<>
    <div className="footer">
      <div className="first">
        <h1>CODEBENDER <svg width="30" height="30" viewBox="0 0 122 107" fill="#fff" xmlns="http://www.w3.org/2000/svg" stroke-width="0.5px" stroke-linecap="round" stroke-linejoin="round"><path d="M98.29 66.6179C97.44 65.1679 96.3999 64.0779 95.1599 63.3679L81.73 55.6179L70.8899 49.3579C67.6699 47.4979 64.72 46.6979 62.05 46.9579C61.46 47.0179 60.8899 47.1179 60.3599 47.2779C59.9899 47.3879 59.63 47.5179 59.28 47.6679L59.0801 47.7679C57.7601 48.3879 56.65 49.368 55.74 50.688L46.8398 45.5479C45.3098 41.5579 43.2 37.8779 40.53 34.5379C39.57 33.3279 38.57 32.2179 37.54 31.2079C35.7 29.4079 33.7499 27.9079 31.6899 26.7179L28.5701 24.9179L7.32007 12.6479C6.19007 11.9979 5.23995 11.8379 4.44995 12.1579L4.18994 12.2879C3.33994 12.7679 2.91992 13.7279 2.91992 15.1479C2.91992 16.5679 3.33994 18.0179 4.18994 19.4679C5.02994 20.9279 6.07007 22.0079 7.32007 22.7279L9.61987 45.0979C10.2099 50.9779 12.3099 56.7979 15.9299 62.5379C19.5599 68.2879 23.7899 72.5579 28.6199 75.3479C32.7899 77.7579 36.5399 78.538 39.8699 77.688C40.5299 77.518 41.16 77.2879 41.75 76.9979L42.1799 76.7779C44.2999 75.5879 45.8598 73.5779 46.8398 70.7479L48.49 65.9079C48.54 65.7279 48.5999 65.5379 48.6499 65.3579C48.7399 65.0179 48.8299 64.6778 48.9299 64.3278C49.0799 63.7878 49.2199 63.0479 49.3699 62.1279L53.0999 64.2779C53.2499 65.5479 53.39 66.5279 53.54 67.2479C53.56 67.3379 53.5798 67.4279 53.5898 67.5079C53.7198 68.1279 53.85 68.7378 53.98 69.3278L54.3201 70.6978L55.6299 75.9478C56.9499 81.2478 59.2699 86.2179 62.5999 90.8679C65.9299 95.5279 69.6799 99.0579 73.8499 101.468C78.6899 104.248 82.91 104.868 86.54 103.308L87.3398 102.908C90.4698 101.208 92.3099 97.9579 92.8499 93.1579L93.0999 91.0179L94.21 81.5779L95.1599 73.4478C96.3999 74.1578 97.44 74.2779 98.29 73.7979C99.13 73.3179 99.55 72.368 99.55 70.938C99.55 69.508 99.13 68.0679 98.29 66.6179ZM40.1499 57.938L40.0701 58.1579L38.5 62.7779C37.77 64.7979 36.5 66.0379 34.71 66.5179C32.92 66.9879 30.8899 66.5779 28.6199 65.2679C25.9799 63.7479 23.69 61.4179 21.75 58.2779C19.81 55.1479 18.66 51.9979 18.3 48.8479L16.21 27.8679L29.6799 35.6379L31.6899 36.7979C34.9899 38.7079 37.51 41.8579 39.27 46.2779C41.02 50.6979 41.3199 54.578 40.1499 57.938ZM85.8101 72.3379L84.5701 83.4279L84.1799 86.8879C83.8099 89.6179 82.66 91.4278 80.72 92.3178C78.78 93.2178 76.4899 92.9079 73.8499 91.3879C71.5899 90.0779 69.55 88.1479 67.76 85.5979C65.97 83.0479 64.7 80.3479 63.97 77.4879L62.4399 70.9279C62.0899 69.5179 61.86 68.2079 61.77 66.9979C61.57 64.1779 62.0901 61.9279 63.3101 60.2279C64.4501 58.6579 65.91 57.9879 67.7 58.2279C68.67 58.3579 69.7299 58.768 70.8899 59.438L74.53 61.5379L83.8301 66.9079L86.26 68.3079L85.8101 72.3379Z" stroke="white" stroke-linejoin="round"/><path d="M40.1499 57.938L40.0701 58.158L38.5 62.778C37.77 64.798 36.5 66.0379 34.71 66.5179C32.92 66.9879 30.8899 66.5779 28.6199 65.2679C25.9799 63.7479 23.69 61.418 21.75 58.278C19.81 55.148 18.66 51.9979 18.3 48.8479L16.21 27.8679L29.6799 35.6379L31.6899 36.798C34.9899 38.708 37.51 41.858 39.27 46.278C41.02 50.698 41.3199 54.578 40.1499 57.938Z" stroke="white" stroke-linejoin="round"/><path d="M85.8103 72.3379L84.5703 83.428L84.1801 86.8879C83.8101 89.6179 82.6602 91.4279 80.7202 92.3179C78.7802 93.2179 76.4901 92.908 73.8501 91.388C71.5901 90.078 69.5502 88.1479 67.7602 85.5979C65.9702 83.0479 64.7002 80.3479 63.9702 77.4879L62.4402 70.928C62.0902 69.518 61.8602 68.2079 61.7702 66.9979C61.5702 64.1779 62.0903 61.9279 63.3103 60.2279C64.4503 58.6579 65.9102 57.9879 67.7002 58.2279C68.6702 58.3579 69.7301 58.768 70.8901 59.438L74.5302 61.538L83.8303 66.908L83.9702 67.4879C84.4002 69.1579 85.0103 70.7779 85.8103 72.3379Z" stroke="white" stroke-linejoin="round"/><path d="M114.92 65.4879L112.85 83.158C112.26 88.358 110.16 91.738 106.54 93.308L87.3398 102.908C90.4698 101.208 92.3099 97.958 92.8499 93.158L93.0999 91.0179L94.21 81.5779L95.1599 73.4479C96.3999 74.1579 97.44 74.278 98.29 73.798L104.9 70.4979L114.92 65.4879Z" stroke="white" stroke-linejoin="round"/><path d="M119.551 60.938C119.551 62.368 119.131 63.318 118.291 63.798L118.031 63.928L114.92 65.4779L104.9 70.4879L98.2905 73.798C99.1305 73.318 99.5505 72.368 99.5505 70.938C99.5505 69.508 99.1305 68.0679 98.2905 66.6179C97.4405 65.1679 96.4004 64.0779 95.1604 63.3679L81.7305 55.6179L70.8904 49.3579C67.6704 47.4979 64.7205 46.6979 62.0505 46.9579C61.4605 47.0179 60.8904 47.1179 60.3604 47.2779C60.3804 47.2279 60.3904 47.1679 60.4104 47.1079L74.5806 40.0179L78.8704 37.8679L78.9304 37.8379C79.8604 37.3679 80.9005 37.0679 82.0505 36.9579C84.7205 36.6979 87.6704 37.4979 90.8904 39.3579L115.16 53.3679C116.4 54.0779 117.441 55.1679 118.291 56.6179C119.131 58.0679 119.551 59.508 119.551 60.938Z" stroke="white" stroke-linejoin="round"/><path d="M74.5801 40.0179L60.4099 47.0979L59.28 47.668L59.0801 47.7679C57.7601 48.3879 56.65 49.368 55.74 50.688L46.8398 45.548L60.1499 38.8979L66.8398 35.548L74.5801 40.0179Z" stroke="white" stroke-linejoin="round"/><path d="M66.8401 35.548L60.1501 38.898L46.8401 45.548C45.3101 41.558 43.2003 37.878 40.5303 34.538C39.5703 33.328 38.5703 32.2179 37.5403 31.2079C35.7003 29.4079 33.7502 27.9079 31.6902 26.7179L28.5703 24.918L7.32031 12.648C6.19031 11.998 5.2402 11.838 4.4502 12.158L24.1902 2.28801C25.0302 1.80801 26.0703 1.92799 27.3203 2.64799L51.6902 16.7179C54.9102 18.5779 57.8603 21.188 60.5303 24.538C63.2003 27.878 65.3101 31.558 66.8401 35.548Z" stroke="white" stroke-linejoin="round"/><path d="M54.3198 70.6979L42.1797 76.778C44.2997 75.588 45.8596 73.5779 46.8396 70.7479L48.4897 65.908C48.5397 65.728 48.5997 65.5379 48.6497 65.3579C48.7397 65.0179 48.8297 64.6779 48.9297 64.3279C49.0797 63.7879 49.2196 63.0479 49.3696 62.1279L53.0996 64.278C53.2496 65.548 53.3898 66.5279 53.5398 67.2479C53.5598 67.3379 53.5796 67.4279 53.5896 67.5079C53.7196 68.1279 53.8497 68.7379 53.9797 69.3279L54.3198 70.6979Z" stroke="white" stroke-linejoin="round"/></svg>
        </h1>
        <p className="elevate">Elevate your online presence with professional, custom-built solutions. From sleek websites to dynamic mobile apps.
        </p>
        <p className="email">opebiyibiodun10@gmail.com</p>
        <p className="phone">Phone: +2349066245634</p>

        <div className="socials">
          <a href="https://wa.me/+2349066245634" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
</svg>
          </a>
          <a href="https://www.linkedin.com/in/opebiyi-femi-005877215/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
          </a>
          <a href="https://www.reddit.com/user/opebiyifemi/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 29 3 C 26.894531 3 24.433594 4.652344 24.0625 12.03125 C 24.375 12.023438 24.683594 12 25 12 C 25.351563 12 25.714844 12.019531 26.0625 12.03125 C 26.300781 7.597656 27.355469 5 29 5 C 29.703125 5 30.101563 5.382813 30.84375 6.1875 C 31.710938 7.128906 32.84375 8.351563 35.0625 8.8125 C 35.027344 8.550781 35 8.269531 35 8 C 35 7.578125 35.042969 7.179688 35.125 6.78125 C 33.75 6.40625 33.023438 5.613281 32.3125 4.84375 C 31.519531 3.984375 30.609375 3 29 3 Z M 41 4 C 38.792969 4 37 5.796875 37 8 C 37 10.203125 38.792969 12 41 12 C 43.207031 12 45 10.203125 45 8 C 45 5.796875 43.207031 4 41 4 Z M 25 14 C 12.867188 14 3 20.179688 3 29 C 3 37.820313 12.867188 45 25 45 C 37.132813 45 47 37.820313 47 29 C 47 20.179688 37.132813 14 25 14 Z M 7.5 14.9375 C 6.039063 14.9375 4.652344 15.535156 3.59375 16.59375 C 1.871094 18.316406 1.515625 20.792969 2.5 22.84375 C 4.011719 19.917969 6.613281 17.421875 9.96875 15.5625 C 9.207031 15.175781 8.363281 14.9375 7.5 14.9375 Z M 42.5 14.9375 C 41.636719 14.9375 40.792969 15.175781 40.03125 15.5625 C 43.386719 17.421875 45.988281 19.917969 47.5 22.84375 C 48.484375 20.792969 48.128906 18.316406 46.40625 16.59375 C 45.347656 15.535156 43.960938 14.9375 42.5 14.9375 Z M 17 23 C 18.65625 23 20 24.34375 20 26 C 20 27.65625 18.65625 29 17 29 C 15.34375 29 14 27.65625 14 26 C 14 24.34375 15.34375 23 17 23 Z M 33 23 C 34.65625 23 36 24.34375 36 26 C 36 27.65625 34.65625 29 33 29 C 31.34375 29 30 27.65625 30 26 C 30 24.34375 31.34375 23 33 23 Z M 16.0625 34 C 16.3125 34.042969 16.558594 34.183594 16.71875 34.40625 C 16.824219 34.554688 19.167969 37.6875 25 37.6875 C 30.910156 37.6875 33.257813 34.46875 33.28125 34.4375 C 33.597656 33.988281 34.234375 33.867188 34.6875 34.1875 C 35.136719 34.503906 35.222656 35.109375 34.90625 35.5625 C 34.789063 35.730469 31.9375 39.6875 25 39.6875 C 18.058594 39.6875 15.210938 35.730469 15.09375 35.5625 C 14.777344 35.109375 14.859375 34.503906 15.3125 34.1875 C 15.539063 34.027344 15.8125 33.957031 16.0625 34 Z"></path>
</svg>
          </a>
          <a href="https://github.com/femiopebiyi" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>
          </a>
          <a href="https://x.com/codewithopebiyi" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/></svg>
          </a>
</div>
      </div>

      <div className="second">
        <h3>QUICK LINKS</h3>
        <Link to="/services" className="services">Services</Link>
        <Link to="/work" className="works">Works</Link>
      </div>

      <div className="third">
        <h3>HELP</h3>
        <Link to="" className="customer">Customer Support</Link>
        <Link to="" className="delivery">Delivery Details</Link>
      </div>

      <div className="fourth">
        <h3>SUBSCRIBE TO NEWSLETTER</h3>
        <input type="email" placeholder="Enter your email"/>
        <button>Subscribe</button>
      </div>
    </div>

    <p id="disclaimer">© Copyright 2024, All Rights Reserved by Opebiyi</p>
    </>
  )
}

export default Footer
