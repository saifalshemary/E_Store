
type NavbarLinks ={
    name:string;
    href:string;
}

export  const DrobDown: NavbarLinks[]=[
    {href: '/' , name:'home'},
    {href: '/about' , name:'about'},
    {href: '/producte' , name:'producte'},
    {href: '/cart' , name:'cart'},
    {href: '/favorites' , name:'favorites'},
    {href: '/orders' , name:'orders'},
    
    
]


export const links={
    HOME :  {href: '/' , name:'home'},
    ABOUT :  {href: '/about' , name:'about'},
    PRODUCTE:{href: '/producte' , name:'producte'},
    Cart :  {href: '/cart' , name:'cart'},
    FAVORITES: {href: '/favorites' , name:'favorites'},
    ORDERS: {href: '/orders' , name:'orders'},
    
} as const ;