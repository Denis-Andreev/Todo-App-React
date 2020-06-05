import React from "react";
import {TransitionGroup} from "react-transition-group";
import {CSSTransition} from "react-transition-group";
export const Notes = ({notes, onRemove}) => (
    <TransitionGroup component="ul" className="list-group">
        {notes.map((note) =>   (
           <CSSTransition
               key={note.id}
               classNames={'note'}
               timeout={800}
           >
               <li
                   className="list-group-item"
                   key={note.id}
               >
                   <strong className="mr-3">
                       {note.body}
                   </strong>
                   <small>
                       {note.date}
                   </small>
                   <button
                       type="button"
                       className="float-right btn btn-outline-danger btn-sm"
                       onClick={() => onRemove(note.id)}
                   >
                    <span>
                        &times;
                    </span>
                   </button>
               </li>
           </CSSTransition>
        ))
        }
    </TransitionGroup>
)
