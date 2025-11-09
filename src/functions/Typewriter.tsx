import React, { useEffect, useRef } from 'react';

interface TypewriterProps {
    texts: string[];
    period?: number;
    className?: string;
}

class TxtType {
    private timeoutId: ReturnType<typeof setTimeout> | null = null;
    toRotate: string[];
    el: HTMLElement;
    loopNum: number;
    period: number;
    txt: string;
    isDeleting: boolean;

    constructor(el: HTMLElement, toRotate: string[], period: number) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = period;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        this.timeoutId = setTimeout(() => {
            this.tick();
        }, delta);
    }

    stop() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}

const createCursorStyle = () => {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(`
        .typewrite > .wrap {
            border-right: 0.08em solid #fff;
            animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: currentColor }
        }
    `);
    return styleSheet;
};

export const Typewriter: React.FC<TypewriterProps> = ({ 
    texts, 
    period = 2000,
    className = ''
}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const typewriterRef = useRef<TxtType | null>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        // Create new instance
        typewriterRef.current = new TxtType(
            elementRef.current,
            texts,
            period
        );

        // Add styles using modern API
        if (document.adoptedStyleSheets) {
            const styleSheet = createCursorStyle();
            document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
            
            // Cleanup function
            return () => {
                if (typewriterRef.current) {
                    typewriterRef.current.stop();
                }
                document.adoptedStyleSheets = document.adoptedStyleSheets
                    .filter(sheet => sheet !== styleSheet);
            };
        } else {
            // Fallback for browsers that don't support Constructable Stylesheets
            const style = document.createElement('style');
            style.textContent = `
                .typewrite > .wrap {
                    border-right: 0.08em solid #fff;
                    animation: blink-caret 0.75s step-end infinite;
                }
                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: currentColor }
                }
            `;
            document.head.appendChild(style);

            // Cleanup function
            return () => {
                if (typewriterRef.current) {
                    typewriterRef.current.stop();
                }
                style.remove();
            };
        }
    }, [texts, period]);

    return (
        <h1>
            <div 
                ref={elementRef}
                className={`typewrite ${className}`.trim()}
            >
                <span className="wrap"></span>
            </div>
        </h1>
    );
};

// Usage example:
