/**
 * A module to handle mediaQueries
 *
 * Definition of sm, xs... are taken from Twitter bootstrap v4 /!\ not v3 /!\
 * @see http://v4-alpha.getbootstrap.com/layout/overview/
 */
 class MediaQueries {
   constructor(){
     this.xsMin = -Infinity
     this.smMin = 544
     this.mdMin=768
     this.lgMin = 992
     this.xlMin=1200
     // aliases
     this.isXs = this.is('xs')
     this.isSm = this.is('sm')
     this.isMd = this.is('md')
     this.isLg = this.is('lg')
     this.isXl = this.is('xl')
   }

   getWindowWidth(){
     return window.innerWidth
   }

   /**
    * Return true if screen width is over the predefined width
    */
   is(sizeName) {
     const sizeMin = this[sizeName + 'Min']
     const width = this.getWindowWidth()
     return ()=>width >= sizeMin
   }

 }
 export default (new MediaQueries())
