function e(message: string): never {
  throw new Error(message);
}

/*the function type never here as seen, should in case it occurs in any situation
 it will display a message error because its never suppose to occur.
 never here the function type e of the property message is a string 
 
 */
