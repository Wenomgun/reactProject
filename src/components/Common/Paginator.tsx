import classes from './Paginator.module.css'
import React, {FC, useState} from 'react';
import left from '../../assets/left.png';
import right from '../../assets/right.jpg';

export type PaginatorPropsType = {
    totalItem: number;
    pageSize: number;
    currentPage: number;
    changePageHandler: Function;
}

let Paginator: FC<PaginatorPropsType> = ({totalItem,
                        pageSize,
                        changePageHandler,
                        currentPage}) => {
    let pagesCount = Math.ceil(totalItem / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [currentPortion, setCurrentPortion] = useState(1);
    const portionCount = Math.ceil(pagesCount / pageSize);
    const leftPosition = (currentPortion - 1) * pageSize + 1;
    const rightPosition = currentPortion * pageSize;

    return <div className={classes.paginator}>
        {
            currentPortion > 1 && <div className={classes.wrapLeftArrow}>
                <img className={classes.leftArrow}
                     onClick={() => {setCurrentPortion(currentPortion - 1)}}
                     src={left} alt={'Previous'}/>
            </div>
        }
        {pages.filter((pageItem) => {
            return pageItem >= leftPosition && pageItem <= rightPosition
        }).map((page) => {
            return <div key={page} onClick={() => { changePageHandler(page)} }
                        className={[currentPage === page ? classes.currentPage : '', classes.page].join(' ')}
            >{page}</div>
        })}
        {
            currentPortion < portionCount && <div className={classes.wrapRightArrow}>
                <img className={classes.rightArrow}
                     src={right} alt={'Next'}
                     onClick={() => {setCurrentPortion(currentPortion + 1)}}/>
            </div>
        }
    </div>
}

export default Paginator;