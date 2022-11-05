export interface project {
    id: string,
    name: string,
    stacks: string[],
    mainImage: string,
    images: string[],
    shortDescription: string,
    description: string[],
}

export interface stack {
    name: string,
    id: string,
    description: string,
    avatar: string,
    rate: number, 
}