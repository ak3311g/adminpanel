import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';


const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li className="relative">
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
          to="#"
        >
          <span
            className={`absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${
              notifying === false ? 'hidden' : 'inline'
            }`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>

          <svg
            className="fill-current duration-300 ease-in-out"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z"
              fill=""
            />
            <path
              d="M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z"
              fill=""
            />
            <path
              d="M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z"
              fill=""
            />
            <path
              d="M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z"
              fill=""
            />
          </svg>
        </Link>

        {/* <!-- Dropdown Start --> */}
        {dropdownOpen && (
          <div
            className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
            </div>

            <ul className="flex h-auto flex-col overflow-y-auto">
              <li>
                <Link
                  className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  to="#"
                >
                  <div className="h-12.5 w-12.5 rounded-full">
                    <img src= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xAA6EAABAwMCAwUECQMFAQAAAAABAAIDBAUREiEGMUETIjJRYQcUcYEVIyRCYpGhscFDUvEWM3Lh8JL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJBEAAgICAgICAgMAAAAAAAAAAAECEQMSITEEE0FRIjIFM4H/2gAMAwEAAhEDEQA/ABKOmGPGVMp6Vo+/+aZiKmwjkixaDzaZpHjC69xBae8E5G0p4MJRsLQqKm2hx2clBaHadirxkAcRkKxp6ZmnkjYehQxWY4HeVhS2ksw4O3BVw2naMbJ5keOSamJ4ziIysZgOUasjllae8rER5CRhajYXrAyttsrnZzlKjt8o2BCKJqdpPJcRU7W52RsP1sH5LdMeoXAoJPIIkdE3yTMkTcckbC9bBeotjidwFCltjsbAInnjwoMrfRGwetgrUUD2E4AUZ9NJ2fhCJ5Ig47hce5tcOSVlKIGvp5NXhCSKn21pdzSSsrUraevYeZCs6euiwgWOWRvLKktq5gNspNlB/FXxKVHXwrOPpCdvmvW3acf5RYGmR18Kn09whxzWUNvE4/yn475O3/KANbbXwnquvpOlY8Ne7GeSzCkvFTOSAcBu5JXNwuM7n6BKTtyHUpgawy50edPatynvfIHDZ7SFjIu01KCzWc9cLqPiaoDSwTOb66N0DNblqoc+ILgVMWOYWUG+1LPrO2fLk7AuVk+9yxxNecjIzhIDQ31MXmmH1MXms8/1JIR1XJ4hefNFgHc08Jz3goMssX9wQcb8853P5Jp16cfNABa6SPPiXrZogOYQYby71XP00fVAgyM0eeYSQWb0fVJAWENj4P8Af2B3ZuIxzV8PZy0R5wc/FH3DFBHFQRaQPCOiIDTt09PyUVfIXRgl64O90hc5oIIQvFbzJIWeRwt44row6mfpG+/RZLShjK+USY2epUi0vsht4fD2jvHUnoeFpM5k2bzyiOCSETtBIwraaeBtHLI44jiYXH125KdpWWoxAF9M2nEkUYIIPiwq+oZI+p1M/wDbK4oWT3Os7KCLJlOMncrRrbwPSR0zPe26n43wtnJIhQbMg9wne1wDT6lQKmlkgI7uAt8l4ctoaWthwMYQzcuBqeoeTHIWjyUexFrEzKoCwHvjb1dhEMIbNR6S5u3gwMnKnXXgSppI3S031jRzbhU1HG+llzFkOHiZnn8FammRKDiMupHB5G/NPx2ySQZAJVjEGTvaWsOXdEdWHhztYmvlGMjl5LOU1EqMG0AdFwxW1rh2TdvNWL/Z5ctBeCzC1u02aOkaAGhXXujXR6SNk4vZWRNOLPmq58P1dvP1rBjqQqowL6JvvDkNWxwczmgefgWIE4a7CTnRSjZlnY+iS0R/BLQ44Dl6l7UP1mtcPD7DDt90K5cO7lVVgb9iiH4QrnRlq1j+pg+wdvbAaaYn+0rCKtwFfPv/AFCvoG9wZopcDm0r53ugdDcakeUhCzgvyZo3wPxzEzeLkpd2rKg2nRE44LsEDqqanc4zHIVnL9ZSdiTpLiAXeSv5GuQk9lkLJa8ykZDW4Y4jn5lalKSNggr2Z0TIqKWtDRoc4sib+Fu37q1vVxroJSaato9Q/ouiJHw1allKXJtCLLaVqivjBKrbReamveYqul7GUdWO1NPwK6vF0koGAx07pnnk0bLPY2UWTSwEFrmgg9Fl3tEoPoy4sqaQaQ/ctCOLfcrtVTAyU1FGzPgMxLj88YVD7VIPsdPWYLe9oe133c7/AMKovmyZrgErXdad8jXzDRn02BWv8LXCKopodDmu7mMjqsOsT2CR8T92O8/L/pF9BM+ieHU73sI3yw/wnmht0RhnS5NwiezT0TgfgbELObVxgCzFWdLxzPQq9j4kppGgslafms4ylHhoJwjLphLKA8blRJYGFQqe5NqG6mu25JyWQ6fGtNrMdWjh9LGXJKHJVOa4jKSX+DLnh8/Yov8AgFdNxpQTwfeI57fEdQ2aAd+SKW10enxBbRmkqMnHk5u2PdZBtyK+fL3Ta7nU7f1Xfutg4ov0UNK9jXAvPkVlbwZp3yOHicSiPLsfSKumo8PyQo91c+GoZEDsAZCr7stLsofveTcJQdjpa0fNNji+TY+C6Vp4PooM41w5JHmd+fzVBdOBKbtHOp5K0SE51duXZ/NE/CEZprHSxPccxN0/kp1fWRwRuc8tA6ZXPa7OuKfRTcIWae3Nd7zI+ToNYGR+S44toqiqgDaR/Zu5E4yry118RpGuqXtjfKT2bPwhR7tUxxUfbQyMe6MgvZnctPkk9aKW2wBU3CVc5+tl2q4njkOzGx/lWPHFFI3g5zJpTNLHpLpCMFxRXSyRSxB7MYKHvaBM4WGRjBkvc1uP/fBK+VyOuGqMUpZjFUDHTkjm3VDJaJrx90/v0WfyH7TKG7gOOETcO1PiicfG3b4rpZxr6LiWrjjc4EDfooc9SzBLHFp9Cot3Y5k+WnYque9+OaqiG+TY+C5GyWimOrU7rk5RRIxroSRzCxnhfiU2+MU87sMzlpyiWv40iZBiKbvH1UKPI2+AomAEh736r1Z27iovcXdt+q8V6IjdjdDWVFF/sSlv7KyF9r3jSZz8lRdpkYCfhBKrWLZNsmyTSTOzI4vJ6ldRMK8hjJU2GErRUiXY0IdXRBnEh7K7P1bAtacfJaEI9IJPRAnFkBkm97xgF2gD0CidUaY7s0P2Z3ma4WaohqpS+eml05PMsIGn+R8lzxPcpaWth1QmWLmcv0tB6Fx8kAcE3r6GvUMshPu8+IZ/wnPdd8itjNsgr3SNnDHxSw6OWw3XDkh+R6OGa+Rgf6idSNMdDQSsc3V9VO4behwVDnkvUMDzWWSMwtGTpqe9j5hVjWy8N6qMfSMIDsiWmdkEcvCct5KOaSq4rnZG6quXuzf919RIWtcP+LcA8kmonZpkStpUTeGLj75HI6FkrIWvwO05/DZQPabcvdbRBFGAZZ5cDPQYO6J20lPboHiNrYoGch0AA6rFuNr6693lzoSTTQZZF677lLFC5HLmmlEoYQRIMq8oT2TmSN2LSP8ApUTX9/c7q0oZmtxk90bH4LsZwIK5af3prZQMgjmoklvI+6pNkuDKcMiqm5gkJDJMcj5H9ESmjY9gc3GD5LWNGU7TAaShP9qiy0eDyRvPbx0AVbUUIwe6qozsD3QOacbpK9kojrOySVDsm09PnmrOnpeWy5pYwrWnj2CRR5BTYxsp0VP6JyKMbKXHGgCLLAOyfy8JWecXkvnip2+BoLs+YHVam+nbNGWP8LkFcS8Pzw1Elwlmjlj2wCcHA6BTIuBnkTi+AOx3gS1wI5jot5tNcbeymhqwRE+JoDzy5eaySvjgmn7aNgjzgloP3lrVqqqa8WennicD3Q17erXDoQubK/o74YZRjclwXUwhmALXhwPUFMDsadrnPfho81T19FPCM073Mx/aVFigqHD66RzvRxXM8lfBrGHHZF4trJay2VTWZji0HbqVirAND3E4LMHZbLxEWx0EudmaDnKxiQDtHDfGSujx3wYeTHoZ3Eu+dzsU+S5hJb5fmF4xje1YNw3IySrjiC2CguQbg9i8NkafNp54+eV09nITLBL7xSPp5HbPOcHlnofQ+qNOF55Bropzks8Jzsds7fms8tMn28xNOGAnB9Ea8PuL7vLFONOGNAOeuAldMbVoJZ4R6KtqYRvsFatdlrmHdzTj5KFUhaJmLRSyQjWdkk/IO8UkCo7pQranGwVZShW1ONgmMmwt5KQZIoW6ppGMaBklzsYVFeLyy3xmOMtdOR/8rOqmrkme50jnOJO5JJU2el4/8dLJBTm6TNFuvGVDR6o6QieToQO6EGXa+1dycXTOJb+3yVJqJ6pxils9nx/GxY1UUdxktl0k5aDnKm0N2rbVUGahnMbj4mkZa74hQ8Ll7dlm0mdSxKMNWHNH7QY3sxcKdzH/AN0e7T8l3UccW0bs7V58gzCz0tPRcFpWTwxbOJ4I/Bd8ScTy3ZnYxR9lB133KEZmEPDgrBzUw9nPZaRSj0c2bAmqI0srdLQCc9cqU+6z1cUFPVP7TsARG88wD0TDo9iMZCYcxzCSAtEzysmKUH0WdI4RSh7ThwOUU0lVJUHtjqhqGgDtGDUHjpqH8hA0c2CA4ZV7Za7RVMDn/VHY+iCEm+A/s9wFa14f3Zoxoe316EfmpNSqi3mN17q5qd2zWRt9D3cn9wreoILcqomU1TK2TxlJeSHvlJUQPUvRTqiqbRUMtQ77jcj1PRVlM8bKDxhWFlDBADgyOy74BJ9HR42NZMqiygrqx9RI573Zc45Kry7dNukJK6bvus7PqHkvhHQG6eauGjbK7CRrBUOdFy5LK8KDduznBXJaV2kUjNpDWnK5dH6J5eFBm4JkYxLh0OeilELnCZhLDGXDIDqbBOF7A10eQOZ6qW/ZNh26LOSXi40wn4ShdVyTNiq3wVAaCCMEOA8wURwSyuMkFUAJ4+enk4HkQgrh2sNJdKeUctYa74HZG9z7tbTzN/FGfgd/3CuJ5vnYVjkmumRpB3ykvJH4eV4rOAbpSchUXGD3GrgaTsI8/qkklLo7PB/uB0c0807JJLI9yA+PCEkkkjuOspFJJAxJFJJAHi8KSSBM5KS8SQQNS8imF6kg4sn7DsBIdkHcLSJvrKaEu3OkH9EklcDzv5D9IkOU4eV6kktDyT//2Q==" alt="User" />
                  </div>

                  <div>
                    <h6 className="text-sm font-medium text-black dark:text-white">
                      Nandan
                    </h6>
                    <p className="text-sm">Hello Krishna 💪</p>
                    <p className="text-xs">2min ago</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* <!-- Dropdown End --> */}
      </li>
    </ClickOutside>
  );
};

export default DropdownMessage;
