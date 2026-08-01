import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';

import logoLight from '/files/imagens/imagens-dark-mode/logo-gabux-light.svg';
import logoDark from '/files/imagens/imagens-light-mode/logo-gabux-dark.svg';

const tagsData = [
  'motion', 'web', 'design', 'cloud', 'creative', 'effects', 'ui/ux', 'code', 'frontend', 
  'visuals', 'system', 'react', 'nextjs', 'interface', 'animation', 'framer', 'figma', 
  'prototype', 'startup', 'innovation', 'development', 'javascript', 'html5', 'css3', 
  'backend', 'fullstack', 'database', 'api', 'serverless', 'mobile', 'responsive', 
  'performance', 'agile', 'scrum', 'marketing', 'seo', 'svg', 'canvas', 'webgl', '3d', 
  'tailwind', 'sass', 'webpack', 'vite', 'git', 'github', 'supabase', 'user experience', 
  'user interface', 'wireframe', 'usability', 'typography', 'interaction', 'user flow', 
  'design system', 'prototyping', 'heuristics', 'user research', 'personas', 'mockup', 
  'information architecture', 'visual grammar', 'microinteractions', 'ui kit', 'layout', 
  'grid system', 'accessibility'
];

export default function HeroSection({ onScrollProgress }) {
  const { theme, t } = useApp();
  const isDark = theme === 'dark';
  const logoSrc = isDark ? logoLight : logoDark;

  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const logoImgRef = useRef(null);
  const resizeUiRef = useRef(null);
  const subTitleRef = useRef(null);
  const mainTitleRef = useRef(null);

  // Pre-load blur effect & handle state
  useEffect(() => {
    const img = logoImgRef.current;
    if (!img) return;

    img.style.filter = "blur(15px)";
    img.style.opacity = "0";

    const timer = setTimeout(() => {
      img.style.transition = "all 1s ease";
      img.style.filter = "none";
      img.style.opacity = "1";
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Native Particle Canvas & Interactive Tag Engine (100% faithful to hero-section.html)
  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;

    const ctx = canvas.getContext('2d');
    let width = hero.clientWidth;
    let height = hero.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const tags = [];
    const mouse = { x: -1000, y: -1000 };
    const EXCLUSION_RADIUS_WORDS = 250;
    const EXCLUSION_RADIUS_LINES = 220;

    function pointLineDistance(px, py, x1, y1, x2, y2) {
      const A = px - x1, B = py - y1, C = x2 - x1, D = y2 - y1;
      const dot = A * C + B * D, len_sq = C * C + D * D;
      let param = -1;
      if (len_sq !== 0) param = dot / len_sq;
      let xx, yy;
      if (param < 0) { xx = x1; yy = y1; }
      else if (param > 1) { xx = x2; yy = y2; }
      else { xx = x1 + param * C; yy = y1 + param * D; }
      const dx = px - xx, dy = py - yy;
      return Math.sqrt(dx * dx + dy * dy);
    }

    const cols = 12, rows = 9;
    const cellW = width / cols, cellH = height / rows;
    let validCells = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const dx = (c * cellW + cellW / 2) - (width / 2);
        const dy = (r * cellH + cellH / 2) - (height / 2);
        if (Math.sqrt(dx * dx + dy * dy) > EXCLUSION_RADIUS_WORDS - 20) {
          validCells.push({ c, r });
        }
      }
    }

    for (let i = validCells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [validCells[i], validCells[j]] = [validCells[j], validCells[i]];
    }

    tagsData.forEach((text, i) => {
      const el = document.createElement('div');
      el.className = 'tag';
      el.innerText = text;
      hero.appendChild(el);

      const cell = validCells[i % validCells.length];
      const originX = cell.c * cellW + (cellW * 0.1) + Math.random() * (cellW * 0.8);
      const originY = cell.r * cellH + (cellH * 0.1) + Math.random() * (cellH * 0.8);

      const tagObj = {
        el, originX, originY,
        timeOffsetX: Math.random() * Math.PI * 2,
        timeOffsetY: Math.random() * Math.PI * 2,
        speedX: 0.2 + Math.random() * 0.3,
        speedY: 0.2 + Math.random() * 0.3,
        amplitude: 15 + Math.random() * 20,
        width: 0, height: 0,
        currentDrawX: originX, currentDrawY: originY,
        currentScale: 0.85, currentOpacity: 0.2,
        isHovered: false
      };

      el.addEventListener('mouseenter', () => (tagObj.isHovered = true));
      el.addEventListener('mouseleave', () => (tagObj.isHovered = false));
      tags.push(tagObj);
    });

    setTimeout(() => {
      tags.forEach(tag => {
        tag.width = tag.el.offsetWidth;
        tag.height = tag.el.offsetHeight;
      });
    }, 50);

    let animFrameId;
    function animateTags() {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.001;

      tags.forEach(tag => {
        const baseX = tag.originX + Math.sin(time * tag.speedX + tag.timeOffsetX) * tag.amplitude;
        const baseY = tag.originY + Math.cos(time * tag.speedY + tag.timeOffsetY) * tag.amplitude;
        let targetX = baseX, targetY = baseY, targetScale = 0.85, targetOpacity = 0.20;

        const dx = mouse.x - baseX, dy = mouse.y - baseY, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 260) {
          const force = (260 - dist) / 260;
          targetScale = 0.85 + force * 0.40;
          targetOpacity = 0.20 + force * 0.8;
          targetX += dx * force * 0.22;
          targetY += dy * force * 0.22;
        }

        if (tag.isHovered) targetScale = 1.30;

        tag.currentDrawX += (targetX - tag.currentDrawX) * 0.08;
        tag.currentDrawY += (targetY - tag.currentDrawY) * 0.08;
        tag.currentScale += (targetScale - tag.currentScale) * 0.12;
        tag.currentOpacity += (targetOpacity - tag.currentOpacity) * 0.12;

        tag.el.style.left = `${tag.currentDrawX - tag.width / 2}px`;
        tag.el.style.top = `${tag.currentDrawY - tag.height / 2}px`;
        tag.el.style.transform = `scale(${tag.currentScale})`;

        let borderAlpha = Math.max(0, Math.min(1, (tag.currentOpacity - 0.20) * 1.8));

        if (!tag.isHovered) {
          tag.el.style.color = isDark 
            ? `rgba(255, 255, 255, ${tag.currentOpacity})` 
            : `rgba(0, 0, 0, ${tag.currentOpacity * 1.2})`;
          tag.el.style.backgroundColor = "transparent";
          tag.el.style.borderColor = isDark 
            ? `rgba(255, 255, 255, ${borderAlpha * 0.5})`
            : `rgba(0, 0, 0, ${borderAlpha * 0.4})`;
        } else {
          tag.el.style.color = isDark ? "#000000" : "#ffffff";
          tag.el.style.backgroundColor = isDark ? "#ffffff" : "#000000";
          tag.el.style.borderColor = isDark ? "#ffffff" : "#000000";
        }
      });

      ctx.lineWidth = 1;
      const lineColor = isDark ? '255, 255, 255' : '0, 0, 0';

      for (let i = 0; i < tags.length; i++) {
        for (let j = i + 1; j < tags.length; j++) {
          const dx = tags[i].currentDrawX - tags[j].currentDrawX;
          const dy = tags[i].currentDrawY - tags[j].currentDrawY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 250) {
            const distToCenter = pointLineDistance(
              width / 2, height / 2,
              tags[i].currentDrawX, tags[i].currentDrawY,
              tags[j].currentDrawX, tags[j].currentDrawY
            );
            if (distToCenter > EXCLUSION_RADIUS_LINES) {
              let opacity = (1 - (dist / 250)) * 0.20;
              ctx.beginPath();
              ctx.moveTo(tags[i].currentDrawX, tags[i].currentDrawY);
              ctx.lineTo(tags[j].currentDrawX, tags[j].currentDrawY);
              ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
              ctx.stroke();
            }
          }
        }
      }

      animFrameId = requestAnimationFrame(animateTags);
    }

    animateTags();

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleResizeWindow = () => {
      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResizeWindow);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResizeWindow);
      tags.forEach(t => t.el.remove());
    };
  }, [isDark]);

  // Native Figma-style Drag Resizing Logic (300px to 540px)
  useEffect(() => {
    const logoWrapper = logoWrapperRef.current;
    if (!logoWrapper) return;

    let isResizing = false;
    let targetWidth = 300;

    const handleMouseDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      isResizing = true;

      const handleMove = (ev) => {
        if (!isResizing) return;
        const rect = logoWrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        let newWidth = Math.abs(ev.clientX - centerX) * 2;
        if (newWidth < 300) newWidth = 300;
        if (newWidth > 540) newWidth = 540;
        logoWrapper.dataset.userWidth = newWidth;
      };

      const handleMouseUp = () => {
        isResizing = false;
        window.removeEventListener('mousemove', handleMove);
      };

      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp, { once: true });
    };

    const handles = logoWrapper.querySelectorAll('.handle');
    handles.forEach(h => h.addEventListener('mousedown', handleMouseDown));

    return () => {
      handles.forEach(h => h.removeEventListener('mousedown', handleMouseDown));
    };
  }, []);

  // Main Scroll Chain Reaction (100% native formulas from hero-section.html)
  useEffect(() => {
    let animId;
    let currentLogoWidth = 300;

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollHeight = wrapperRef.current.offsetHeight - window.innerHeight;
      
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.max(0, Math.min(1, scrolled / (scrollHeight || 1)));

      if (onScrollProgress) onScrollProgress(progress);

      const height = window.innerHeight;
      const scrollRange = height * 0.6;
      const pLogo = Math.min(scrolled / scrollRange, 1);

      // User custom width or default 300px
      const userTargetWidth = parseFloat(logoWrapperRef.current?.dataset?.userWidth || 300);
      const headerLogoWidth = 65;
      
      currentLogoWidth += (userTargetWidth - currentLogoWidth) * 0.1;
      const scrollWidth = currentLogoWidth + (headerLogoWidth - currentLogoWidth) * pLogo;
      const startY = height / 2;
      const endY = 35;
      const currentY = startY + (endY - startY) * pLogo;

      if (logoWrapperRef.current) {
        logoWrapperRef.current.style.width = scrollWidth + 'px';
        logoWrapperRef.current.style.top = currentY + 'px';
        logoWrapperRef.current.style.transform = `translate(-50%, -50%)`;
      }

      // Hide/fade resize handles and blue border
      const uiAlpha = Math.max(0, 1 - (pLogo * 5));
      if (resizeUiRef.current) resizeUiRef.current.style.opacity = uiAlpha;
      if (logoWrapperRef.current) {
        const handles = logoWrapperRef.current.querySelectorAll('.handle');
        handles.forEach(h => h.style.opacity = uiAlpha);
      }

      // Chain reaction titles (Fold 2)
      const subStart = scrollRange;
      const pSub = Math.max(0, Math.min(1, (scrolled - subStart) / 400));
      if (subTitleRef.current) {
        subTitleRef.current.style.opacity = pSub;
        subTitleRef.current.style.transform = `translateY(${(1 - pSub) * 20}px)`;
      }

      const h1Start = subStart + (400 * 0.95);
      const pMain = Math.max(0, Math.min(1, (scrolled - h1Start) / 400));
      if (mainTitleRef.current) {
        mainTitleRef.current.style.opacity = pMain;
        mainTitleRef.current.style.transform = `translateY(${(1 - pMain) * 20}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScrollProgress]);

  return (
    <div ref={wrapperRef} className="relative w-full h-[350vh]">
      {/* Sticky Hero Viewport - Pinned only during Hero scroll, unpins when scrolling into Fold 3 */}
      <section 
        id="hero" 
        ref={heroRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10 select-none"
      >
        {/* VHS Twitch Grid Overlay */}
        <div 
          className="absolute inset-0 z-0 vhs-grid pointer-events-none" 
          style={{
            backgroundImage: isDark
              ? 'linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)'
              : 'linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
            backgroundSize: '3px 3px'
          }}
        />

        {/* Matrix Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

        {/* Vignette Overlay */}
        <div 
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: isDark
              ? 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 20%, rgba(255,255,255,0) 45%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.98) 100%)'
              : 'radial-gradient(circle at center, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 20%, rgba(0,0,0,0) 45%, rgba(250,250,250,0.4) 80%, rgba(250,250,250,0.98) 100%)'
          }}
        />

        {/* Central Titles Layer (Fold 2 - Chain Reaction Reveal) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-[50] pointer-events-none text-center px-4 w-full max-w-4xl">
          {/* Subtitle H5 */}
          <h5 
            ref={subTitleRef}
            className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-4 opacity-0 transition-all duration-300"
          >
            {t.heroH5}
          </h5>

          {/* Main H1 Title: PP Mori SemiBold + PP Editorial New Italic for "explorador" / "explorer" */}
          <h1 
            ref={mainTitleRef}
            className="font-mori text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] opacity-0 tracking-tight transition-all duration-300"
          >
            <span>{t.heroH1Pre}</span>
            <span className="font-editorial-italic font-normal italic underline decoration-1 underline-offset-4 text-amber-400 dark:text-amber-300">
              {t.heroH1Em}
            </span>
            <span>{t.heroH1Post}</span>
          </h1>
        </div>

        {/* Resizable Morphing Center Logo (Fold 1 -> Header) with Figma Handles */}
        <div 
          ref={logoWrapperRef}
          className="fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] logo-wrapper"
        >
          <div ref={resizeUiRef} className="resize-border" />
          <img 
            ref={logoImgRef}
            src={logoSrc} 
            alt="Gabux Logo" 
            className="w-full h-auto block pointer-events-none drop-shadow-2xl"
          />
          <div className="handle nw" />
          <div className="handle ne" />
          <div className="handle sw" />
          <div className="handle se" />
        </div>
      </section>
    </div>
  );
}
