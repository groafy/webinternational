'use client';
import { useState } from 'react';
import './faqAccordion.scss'

export default function FaqAccordion() {
    const accordionItems = [
        {
            title: 'How do I get started?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorem accusantium libero vel! Iusto voluptatibus nihil fugiat voluptates laboriosam voluptate unde perspiciatis velit maxime! Hic, nam. Voluptate nihil obcaecati ut.'
        },
        {
            title: 'How do I get started?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorem accusantium libero vel! Iusto voluptatibus nihil fugiat voluptates laboriosam voluptate unde perspiciatis velit maxime! Hic, nam. Voluptate nihil obcaecati ut.'
        },
        {
            title: 'How do I get started?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorem accusantium libero vel! Iusto voluptatibus nihil fugiat voluptates laboriosam voluptate unde perspiciatis velit maxime! Hic, nam. Voluptate nihil obcaecati ut.'
        },
        {
            title: 'How do I get started?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorem accusantium libero vel! Iusto voluptatibus nihil fugiat voluptates laboriosam voluptate unde perspiciatis velit maxime! Hic, nam. Voluptate nihil obcaecati ut.'
        },
        {
            title: 'How do I get started?',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorem accusantium libero vel! Iusto voluptatibus nihil fugiat voluptates laboriosam voluptate unde perspiciatis velit maxime! Hic, nam. Voluptate nihil obcaecati ut.'
        }
    ];

    const expandItem = (button) => {
        const id = button.getAttribute('aria-controls');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(id);
        if(panel) {
            if(isExpanded) {
                button.setAttribute('aria-expanded', 'false');
                panel.setAttribute('hidden', 'true');
            } else {
                button.setAttribute('aria-expanded', 'true');
                panel.removeAttribute('hidden');
            }
        }
    }

    return (
        <section className='faqAccordion__base'>
            <h1 className='h1'>
                When you succeed <br />
                <span className='text--primary d1 textcontentshadow' data-title="We succeed">We succeed</span>
            </h1>
            <div className='faqAccordion__accordion'>
                {accordionItems.map((item, index) => {
                    return (
                        <div key={index} className='faqAccordion__accordionItem'>
                            <button 
                                aria-controls={`panel${index + 1}`}
                                aria-expanded='false'
                                onClick={(e) => expandItem(e.currentTarget)}
                                className='faqAccordion__accordionItemButton'
                            >
                                <svg className='faqAccordion__accordionItemButtonIcon--closed' aria-hidden="true" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <svg className='faqAccordion__accordionItemButtonIcon--open' aria-hidden="true" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <h3 tabIndex={-1} className='h3 faqAccordion__accordionItemTitle'>{item.title}</h3>
                            </button>
                            <div id={`panel${index + 1}`} hidden className='faqAccordion__accordionItemPanel'>
                                <p className='introText'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}