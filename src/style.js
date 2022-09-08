const styles = {
    boxWidth: "lg:max-w-[1280px] w-full",
    boxWidth2: 'w-full',
  
    heading1: "font-fraunces font-bold lg:text-4xl text-2xl text-white w-full",
    heading2: 'font-fraunces font-bold lg:text-2xl text-xlg text-black',
    graph_heading: 'font-fraunces font-bold text-tiny text-text_cyan',
    photo_heading: 'font-fraunces font-bold text-tiny text-photo_text',

    paragraph: "font-barlow font-semibold text-dark_grey_blue text-base",
    photo_p: 'font-barlow font-semibold text-photo_text text-base',
    cart_p: 'font-barlow font-semibold text-text_cyan text-[16px]',


    client_head: 'font-fraunces font-bold uppercase text-gray_blue text-base',
    client_p:'font-barlow font-semibold text-neutral_grey_blue text-base',
    client_pos: 'font-barlow font-semibold text-gray_blue text-xs',
    client_name: 'font-fraunces font-bold text-base',

    foot_p: 'font-barlow font-semibold text-footer text-base',

    btn1: 'py-4 px-9 text-neutral_blue bg-white font-fraunces text-sm rounded-3xl min-h-[56px] hover:text-white hover:bg-opacity-25',
    btn2: 'font-fraunces text-black uppercase tracking-widest',

  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "px-7 lg:px-12",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "mx-6 lg:mx-[165px]",
    marginY: "my-16 lg:my-40",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;