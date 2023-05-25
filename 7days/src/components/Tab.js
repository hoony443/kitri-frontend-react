import { useState } from "react";

const useTab = (initialTab, allTab) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return{
        currentItem: allTab[currentIndex],
        changeItem: setCurrentIndex
    }; 
} 


function Tab() {
    const content = [
        {
            tab: "section1",
            content: "I'm section1"
        },
        {
            tab: "section2",
            content: "I'm section2"
        }
    ]
    const { currentItem, changeItem} = useTab(0, content);
    return(
        <div>
            {content.map((item, index) => (
                <button onClick={() => changeItem(index)}>{item.tab}</button> 
            ))}
            
            <div>{currentItem.content}</div>
        </div>

    );
}

export default Tab;





























// import { useState } from "react";

// //Tab custom hook
// const useTab = (initialTab, allTabs) => {
//     const [currentIndex, setCurrentIndex] = useState(initialTab)
//     if (!allTabs || !Array.isArray(allTabs)) {
//         return
//     }
//     return {
//         currentItem : allTabs[currentIndex],
//         changeItem : setCurrentIndex
//     }
// }
// function Tab() {
//     const content = [
//         {
//             tab:"Section1",
//             content: "I'm Section1"
//         },
//         {
//             tab:"Section2",
//             content: "I'm Section2"
//         }
//     ]
//     const { currentItem, changeItem } = useTab(0, content)
    
//   return (
//     <div>
//         {content.map((item, index) => (
//             <button onClick={() => changeItem(index)}>{item.tab}</button>
//         ))}
//         <div>{currentItem.content}</div>
//     </div>
//   );
// }

// export default Tab;
