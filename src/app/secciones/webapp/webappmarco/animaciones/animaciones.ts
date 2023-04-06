import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from "@angular/animations";




/* transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1); */
export const animacionsidebar = trigger('routeAnimations',
[
    transition('* => *', [
  
      query('h1',[
        style({ opacity: 0, transform: 'translateX(100%)'}),
        stagger('2s linear', [
            animate('5s linear', style({ opacity: 8, transform: 'none'}))
        ])
       ], {optional: true})
      
    ])
]);

export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);

    export const animacion_sidebar =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('animacionsidebar', [

        // end state styles for route container (host)
        state('sale', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);

    /* ANIMACIONES AL PASAR  */
    export const cambioRuta =
  /* trigger('rutasanimadas', [
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
      ], {optional: true}),
      query(':enter', [
        style({ left: '-100%' })
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%' }))
        ],{optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({ left: '-100%' })
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ]); */

  trigger('rutasanimadas', [
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
      ], {optional: true}),
      query(':enter', [
        style({ left: '-100%' })
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%' }))
        ],{optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
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
      ], {optional: true}),
      query(':enter', [
        style({ left: '-100%' })
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ]);



  /* animacion izquierda y derecha */
export const left = [
    query(':enter, :leave', style({ position: 'relative', height: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
            optional: true,
        }),
    ]),
];

export const right = [
    query(':enter, :leave', style({ position: 'relative', height: '100%' }), { optional: true }),
    group([
        query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
            optional: true,
        }),
        query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
            optional: true,
        }),
    ]),
];
