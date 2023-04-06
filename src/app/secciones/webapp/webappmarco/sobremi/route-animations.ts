import {
    trigger,
    transition,
    style,
    query as q,
    group,
    animateChild,
    animate,
    keyframes,
    stagger,
    AnimationMetadata,
} from '@angular/animations';
import { Trigger } from 'ngx-bootstrap/utils';

/*export const query = (s: string,a: AnimationMetadata | AnimationMetadata[],o={optional:true})=>{
  return q(s, a, o);
}; */ /* export const query = (s,a,o = {optional:true}) => q (s, a, o); */

export function query(s, a) {
  return q(s, a, {optional: true});
}

/* TRANSICION EN LAS CUATRO PAGINAS GOD */

/* sobremi = home, proyecto = about, skill = lazy1, under = lazy2 */
export const transiciones = trigger("transiciones", [

  /** ================== todos combinaciones izquierda a derecha */
  transition("* => under", [
    query(
      ":enter, :leave",
      style({
        position: "absolute",
        
        width: '100%',
        height: '100%', 
        overflow: 'hidden'
      })
    ),

    query(":enter", style({ transform: "translateX(-100%)"})),
    
    group([
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate(".8s", style({ transform: "translateX(100%)"}))
      ]),
      query(":enter", [
        animate(".8s", style({ transform: "translateX(0%)" })),
        animateChild()
      ])
    ]) 
  ]),

  transition("sobremi => proyecto", [
    query(
      ":enter, :leave",
      style({
        position: "absolute",
        
        width: '100%',
        height: '100%', 
        overflow: 'hidden'
      })
    ),

    query(":enter", style({ transform: "translateX(-100%)"})),
    
    group([
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate(".8s", style({ transform: "translateX(100%)"}))
      ]),
      query(":enter", [
        animate(".8s", style({ transform: "translateX(0%)" })),
        animateChild()
      ])
    ]) 
  ]),

  transition("sobremi => skill", [
    query(
      ":enter, :leave",
      style({
        position: "absolute",
        
        width: '100%',
        height: '100%', 
        overflow: 'hidden'
      })
    ),

    query(":enter", style({ transform: "translateX(-100%)"})),
    
    group([
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate(".8s", style({ transform: "translateX(100%)"}))
      ]),
      query(":enter", [
        animate(".8s", style({ transform: "translateX(0%)" })),
        animateChild()
      ])
    ]) 
  ]),

  transition("proyecto => skill", [
    query(
      ":enter, :leave",
      style({
        position: "absolute",
        
        width: '100%',
        height: '100%', 
        overflow: 'hidden'
      })
    ),

    query(":enter", style({ transform: "translateX(-100%)"})),
    
    group([
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate(".8s", style({ transform: "translateX(100%)"}))
      ]),
      query(":enter", [
        animate(".8s", style({ transform: "translateX(0%)" })),
        animateChild()
      ])
    ]) 
  ]),

  
/** ================== todos combinaciones derecha a izquierda */
 transition("* => sobremi", [
  query(
    ":enter, :leave",
    style({
      position: "absolute",
      
      width: '100%',
      height: '100%', 
      overflow: 'hidden'
    })
  ),

  query(":enter", style({ transform: "translateX(100%)"})),
  
  group([
    query(":leave", [
      style({ transform: "translateX(0%)" }),
      animate(".8s", style({ transform: "translateX(-100%)"}))
    ]),
    query(":enter", [
      animate(".8s", style({ transform: "translateX(0%)" })),
      animateChild()
    ])
  ]) 
]),

  transition("under => skill", [
    query(
      ":enter, :leave",
      style({
        position: "absolute",
        
        width: '100%',
        height: '100%', 
        overflow: 'hidden'
      })
    ),

    query(":enter", style({ transform: "translateX(100%)"})),
    
    group([
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate(".8s", style({ transform: "translateX(-100%)"}))
      ]),
      query(":enter", [
        animate(".8s", style({ transform: "translateX(0%)" })),
        animateChild()
      ])
    ]) 
  ]),

  transition("under => proyecto", [
    query(
      ":enter, :leave",
      style({
        position: "absolute",
        
        width: '100%',
        height: '100%', 
        overflow: 'hidden'
      })
    ),

    query(":enter", style({ transform: "translateX(100%)"})),
    
    group([
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate(".8s", style({ transform: "translateX(-100%)"}))
      ]),
      query(":enter", [
        animate(".8s", style({ transform: "translateX(0%)" })),
        animateChild()
      ])
    ]) 
  ]),

  transition("skill => proyecto", [
    query(
      ":enter, :leave",
      style({
        position: "absolute",
        
        width: '100%',
        height: '100%', 
        overflow: 'hidden'
      })
    ),

    query(":enter", style({ transform: "translateX(100%)"})),
    
    group([
      query(":leave", [
        style({ transform: "translateX(0%)" }),
        animate(".8s", style({ transform: "translateX(-100%)"}))
      ]),
      query(":enter", [
        animate(".8s", style({ transform: "translateX(0%)" })),
        animateChild()
      ])
    ]) 
  ]),

]);

/*
export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%',height:'100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    
    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1.0s ease-in-out', style({transform: 'translateX(-100%)'}))
      ]),
      query(':enter', [
        animate('1.0s ease-in-out', style({transform: 'translateX(0%)'})),
        animateChild()
      ])
    ]),
  ]),
]);
*/

/*
export const cambioRuta =

trigger('cambioruta', [
  transition('* <=> *', [
    style({ position: 'relative', height: '100%', }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
        
      })
    ],),
    query(':enter', [
      style({ left: '-100%' })
    ],),
    query(':leave', animateChild(),),
    group([
      query(':leave', [
        animate('500ms ease-out', style({ left: '100%' }))
      ],),
      query(':enter', [
        animate('500ms ease-out', style({ left: '0%' }))
      ],)
    ]),
    query(':enter', animateChild(),),
  ]),
  transition('* <=> *', [
    style({ position: 'relative', height: '100%' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild(),),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%' }))
      ],),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ], )
    ]),
    query(':enter', animateChild(),),
  ])
]);
*/

// basic
/*
export const fader = 
    trigger('fader', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position:'absolute',
                    left: 0,
                    width:'100%',
                    height: '92%',
                    opacity: 0,
                    transform: 'scale(0) translateY(92%)',
                    overflow: 'hidden'
                }),
            ],),
            query(':enter', [
                animate(
                    '800ms ease',
                    style({opacity:1, transform: 'scale(1) translateY(0)', overflow: 'hidden'})
                ),
            ],),
        ])
    ]

);
*/

/* transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1); */
/* export const animacionsidebar = trigger('sidebaranimacion',
[
    transition('* => *', [
  
      query('h1',[
        style({ opacity: 0, transform: 'translateX(100%)'}),
        stagger('2s linear', [
            animate('5s linear', style({ opacity: 8, transform: 'none'}))
        ])
       ],)
      
    ])
]);

export const slider = 
    trigger('slider',[
        transition(
            '* => isLeft', slideTo('left'),
        ),
        transition(
            '* => isRight', slideTo('right'),
        ),
        transition(
            'isRight => *', slideTo('left'),
        )

    ]);

   export function slideTo(direction){
        const optional = { optional: true };

        return[
            query(':enter, :leave', [
                style({
                  position: 'absolute',
                  top: 0,
                  [direction]: 0,
                  width: '100%',
                }),
            ],),
            query(':enter', [
                style({[direction]: '-100%'})
            ]),
            group([
                query(':leave', [
                    animate('600ms ease', style({ [direction]: '100%'}))
                ],),
                query(':enter', [
                    animate('600ms ease', style({ [direction]: '0%' }))
                ])
            ])
        ];
    }

   

/*export const transform =
  trigger('transform', [
    transition('* <=> *', translateTo({ x: -100, y: -100, rotate: -720 })),
    transition('* => skills', translateTo({ x: 100, y: -100, rotate: 90 })),
    transition('under => *', translateTo({ x: -100, y: -100, rotate: 360 })),
    transition('proyecto => *', translateTo({ x: 100, y: -100, rotate: -360 })),
]);
*/

/*
export function translateTo({x = 100, y = 0, rotate = 0}){

    const optional = { optional: true };

    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ], ),
        query(':enter', [
            style({ transform: `${x}%, ${y}%} %) rotate(${rotate}deg)`})
        ]),
        group([
            query(':leave', [
                animate('600ms ease-out',
                style({ transform: `${x}%, ${y}%} %) rotate(${rotate}deg)`})
                )
            ],),
            query(':enter', [
                animate('600ms ease-out',
                style({ transform: ` translate(0, 0) rotate(0)`})

                )
            ])
        ])
    ];
}
*/

// KEYFRAMES
/*
export const stepper = 
    trigger('stepper', [
        transition('* <=> *',[
            query(':enter, :leave', [
              style({
                  position: 'absolute',
                  left:0,
                  width:'100%',
              })          
            ],),
            group([
                query(':enter', [
                  animate('2000ms ease', keyframes([
                      style({transform: 'scale(0) translateX(100%)', offset: 0 }),
                      style({transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
                      style({transform: 'scale(1) translateX(0%)', offset: 1 }),
                  ]))              
                ]),
                query(':leave', [
                    animate('2000ms ease', keyframes([
                        style({transform: 'scale(1)', offset: 0 }),
                        style({transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                        style({opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)' , offset: 1 }),
                    ]))              
                ])

            ])
        ])
    ])
    */