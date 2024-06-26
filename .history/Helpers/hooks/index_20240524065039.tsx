import { notFound, usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Helpers } from "..";
import { linkType, SectionType } from "../types";
import { SectionContext } from "../context";

export const useResize = () => {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };
  const [selectedOption, setSelectedOption] = useState<string>("--Choose--");
  const onOptionChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log("User Selected Value - ", event.target.value);
    setSelectedOption(event.target.value);
  };

  useEffect(resizeTextArea, [val]);
  return { val, setVal, textAreaRef, selectedOption, onOptionChangeHandler };
};

export const useScrollTop = () => {
  const pathname = usePathname();
  const scrollBtn = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    if (scrollBtn.current) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        scrollBtn.current.style.bottom = "30px";
        scrollBtn.current.style.opacity = "1";
      } else {
        scrollBtn.current.style.bottom = "-20px";
        scrollBtn.current.style.opacity = "0";
      }
    }
  };
  const scrollTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { scrollTop, scrollBtn, pathname };
};
export const useWhatsappLink = () => {
  const whatsappLink = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    // if (whatsappLink.current) {
    //   if (
    //     document.body.scrollTop > 160 ||
    //     document.documentElement.scrollTop > 160
    //   ) {
    //     whatsappLink.current.style.bottom = "50px";
    //     whatsappLink.current.style.opacity = "1";
    //   } else {
    //     whatsappLink.current.style.bottom = "-50px";
    //     whatsappLink.current.style.opacity = "0";
    //   }
    // }
  };
  return { whatsappLink };
};
export const useFullWidth = (fullWidth: string) => {
  const [anim, setAnim] = useState<string>("");
  const timer = useRef<any | null>(null);
  useEffect(() => {
    timer.current = setTimeout(() => {
      setAnim(fullWidth);
    }, 2000);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);
  return { anim, setAnim };
};
export const useStickyNav = (isStickyClass: string) => {
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (headerRef.current) {
      let number = headerRef.current.style.display === "" ? 120 : 175;
      const stickyClass = scrollTop >= number ? isStickyClass : "";
      setSticky(stickyClass);
    }
  };
  return { sticky, headerRef };
};
export const useSideBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef<HTMLDivElement | null>(null);

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "70%";
        sideContent.current.style.visibility = "visible";
      }
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "0%";
        sideContent.current.style.visibility = "hidden";
      }
    }, 400);
  };
  return { show, hide, sidebar, sideContent };
};
export const useValidRoute = (pathname: string): boolean => {
  const params = usePathname();
  const validRoutes: string[] = [
    "/localhost:3000",
    "/contact",
    "/",
    "/about",
    "/works/[id]",
    '/blog',
    "/blog" + params.slice(5, params.length),
    "/works" + params.slice(6, params.length),
  ];
  const checkValid = (pathname: string): boolean => {
    return validRoutes.includes(pathname);
  };
  return checkValid(pathname);
};


export const useIntersection = (elementRef: React.RefObject<HTMLElement>, rootMargin = '80px') => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        ,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, rootMargin]);

  return isIntersecting;
};

export default useIntersection;

export const useScrollReveal = (shouldRepeat: boolean) => {
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function (...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  }
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          debounce(() => {
            entry.target.classList.add('animateIn'); // Add your animation class here
          }, 200)()
        }
        else {
          shouldRepeat && (debounce(() => {
            entry.target.classList.remove('animateIn');
          }, 200)())
          // Remove animation class if element is not intersecting
        }
      });
    }, { rootMargin: '80px' });

    elementsRef.current.forEach((element) => {
      observer.observe(element);
    });


    return () => {
      observer.disconnect();
    };
  }, []);

  return { elementsRef }
}

export const useSetIntersections = (section: SectionType) => {
  const introRef = React.useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(introRef)
  const { setSection } = useContext(SectionContext);
  useEffect(() => {
    if (isVisible) {
      setSection(section)
    }
  }, [isVisible])
  return { introRef }
}