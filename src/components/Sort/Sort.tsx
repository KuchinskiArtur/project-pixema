import React from "react";
import "./Sort.css";
import classNames from "classnames";
import { Filter } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterSelectors,
  setFilterSortTab,
} from "../../redux/reducers/filterReducer";

const SortTabs = () => {
  const dispatch = useDispatch();

  const onTabClick = (tab: string) => {
    dispatch(setFilterSortTab(tab));
  };

  const activeTab = useSelector(FilterSelectors.getFilterSortTab);

  const TABS = [{ tabName: Filter.Movie }, { tabName: Filter.Series }];

  return (
    <div className="sortTabs">
      {TABS.map((item) => {
        const { tabName } = item;
        return (
          <button
            key={tabName}
            onClick={() => onTabClick(tabName)}
            className={classNames("sortTabs__btn", {
              ["_active"]: activeTab === tabName,
            })}
          >
            {tabName}
          </button>
        );
      })}
    </div>
  );
};

export default SortTabs;
