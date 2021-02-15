import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleTabs from './SimpleTabs';
import reportWebVitals from './reportWebVitals';
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'

var gfm = require('remark-gfm')
const input = `"desc": "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. \nAs a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.\n### Animated Object Statistics \n| Size | HP | AC | Attack | Str | Dex |\n|--------|----|----|----------------------------|-----|-----|\n| Tiny | 20 | 18 | +8 to hit, 1d4 + 4 damage | 4 | 18 |\n| Small | 25 | 16 | +6 to hit, 1d8 + 2 damage | 6 | 14 |\n| Medium | 40 | 13 | +5 to hit, 2d6 + 1 damage | 10 | 12 |\n| Large | 50 | 10 | +6 to hit, 2d10 + 2 damage | 14 | 10 |\n| Huge | 80 | 10 | +8 to hit, 2d12 + 4 damage | 18 | 6 | \n\nAn animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form."`
// <ReactMarkdown plugins={[gfm]} source={input} />


ReactDOM.render(
  <React.StrictMode>
    <SimpleTabs />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
