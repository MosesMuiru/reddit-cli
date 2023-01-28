#! /usr/bin/env node

import open from "open"
import fetch from "node-fetch"
import yargs from "yargs"


// getting 
const { argv } = yargs(process.argv)

const res = await fetch("https://reddit.com/.json")
// making sure the data has been returned in json format
const data = await res.json()
// getiing the children in the data
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]

// getting the link of the random children
const link = `https://reddit.com${randomPost.data.permalink}`

// output
if(argv.print)
{
    console.log(`
    title:${randomPost.title}
    link:${link}
    `)
}
else{
    open(link)
}
if(argv.google){
    
    open("https://google.com")
}