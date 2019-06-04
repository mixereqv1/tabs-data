const tabComponent = {

    getTabsBtn: () => {
        const tabsBtn = document.querySelectorAll('.tabs__btn');
        return tabsBtn;
    },

    getTabsContent: () => {
        const tabsContent = document.querySelectorAll('.tabs__content');
        return tabsContent;
    },

    getDeleteBtn: () => {
        const deleteBtn = document.querySelectorAll('.deleteTab');
        return deleteBtn;
    }

}