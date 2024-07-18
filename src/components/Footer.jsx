import React from 'react'

const Footer = () => {
  return (
    <>
        <div class="mt-4 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="lg:ml-5 text-left lg:mr-4">
            <h3 className="text-zinc-500 text-xl font-semibold tracking-tight">
              you can reach me at <a href="mailto:sbhunia2903@gmail.com"><span className="text-gray-100 no-underline hover:underline">sbhunia2903@gmail.com</span></a>. <span className="text-custom">akbdkahbdhdvbajdhbvshshsh.</span>
            </h3>
            <h3 className="text-zinc-500 text-xl font-semibold tracking-tight mt-2">
              if you want to ask something or just want to say hi then feel free to mail me
            </h3>
            <h3 className="text-zinc-500 text-xl font-semibold tracking-tight">
              or connect with me on any social platform given below.
            </h3>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-left lg:flex-row lg:items-start justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://github.com/Sayak-Bhunia">
                <span>github</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://www.linkedin.com/in/sayak-bhunia-452419252/">
                <span>linkedin</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://twitter.com/0xSayak15089">
                <span>twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://leetcode.com/Sayak2903/">
                <span>leetcode</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
            <div>
              <a className="no-underline hover:underline group inline-block items-center text-xl font-semibold text-gray-100" target="_blank" href="https://www.codechef.com/users/sayak2903">
                <span>codechef</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" group-hover:text-neutral-500 hover:decoration-neutral-500/60 group-hover:translate-x-1  transition duration-300 ease-in-out transform ml-1 inline "><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer;