import { IPaginationProps, isIPaginationProps } from './interfaces';
import {
  generatePageNumberArray,
  updatePageNumber,
  getLastPageIndex,
  getFirstItemOnCurrentPage,
  getLastItemOnCurrentPage,
} from './utils';

const consoleErrorSpy = jest.spyOn(global.console, 'error');

describe('Pagination utils', () => {
  describe('getLastPageIndex', () => {
    it('should handle when last page is first page', () => {
      expect(
        getLastPageIndex({
          currentPageIndex: 0,
          pageSize: 10,
          totalItemCount: 9,
        })
      ).toBe(0);
    });

    it('should handle normal case', () => {
      expect(
        getLastPageIndex({
          currentPageIndex: 0,
          pageSize: 10,
          totalItemCount: 99,
        })
      ).toBe(9);
    });

    it('should handle when totalItemCount is 0', () => {
      expect(
        getLastPageIndex({
          currentPageIndex: 0,
          pageSize: 10,
          totalItemCount: 0,
        })
      ).toBe(0);
    });
  });

  describe('getFirstItemOnCurrentPage', () => {
    it('should return 1 if the currentPage is 0', () => {
      expect(
        getFirstItemOnCurrentPage({
          currentPageIndex: 0,
          pageSize: 10,
          totalItemCount: 9,
        })
      ).toBe(1);

      expect(
        getFirstItemOnCurrentPage({
          currentPageIndex: 0,
          pageSize: 100,
          totalItemCount: 9,
        })
      ).toBe(1);

      expect(
        getFirstItemOnCurrentPage({
          currentPageIndex: 0,
          pageSize: 1,
          totalItemCount: 1,
        })
      ).toBe(1);
    });

    it('should return 0 if totalItemCount is 0', () => {
      expect(
        getFirstItemOnCurrentPage({
          currentPageIndex: 0,
          pageSize: 10,
          totalItemCount: 0,
        })
      ).toBe(0);
    });

    it('should handle normal cases', () => {
      expect(
        getFirstItemOnCurrentPage({
          currentPageIndex: 5,
          pageSize: 10,
          totalItemCount: 99,
        })
      ).toBe(51);

      expect(
        getFirstItemOnCurrentPage({
          currentPageIndex: 5,
          pageSize: 5,
          totalItemCount: 99,
        })
      ).toBe(26);
    });
  });

  describe('getLastItemOnCurrentPage', () => {
    it('should handle when the last of all the items is on the current page', () => {
      expect(
        getLastItemOnCurrentPage({
          currentPageIndex: 0,
          pageSize: 10,
          totalItemCount: 9,
        })
      ).toBe(9);

      expect(
        getLastItemOnCurrentPage({
          currentPageIndex: 1,
          pageSize: 50,
          totalItemCount: 99,
        })
      ).toBe(99);
    });

    it('should handle normal cases', () => {
      expect(
        getLastItemOnCurrentPage({
          currentPageIndex: 0,
          pageSize: 10,
          totalItemCount: 9,
        })
      ).toBe(9);

      expect(
        getLastItemOnCurrentPage({
          currentPageIndex: 1,
          pageSize: 50,
          totalItemCount: 76,
        })
      ).toBe(76);
    });
  });

  describe('updatePageNumber', () => {
    it('should move the currentPage to the corresponding page which contains the first item of the old page.', () => {
      expect(
        updatePageNumber(
          {
            currentPageIndex: 0,
            pageSize: 10,
            totalItemCount: 40,
          },
          25
        )
      ).toStrictEqual({
        currentPageIndex: 0,
        pageSize: 25,
        totalItemCount: 40,
      });

      expect(
        updatePageNumber(
          {
            currentPageIndex: 0,
            pageSize: 25,
            totalItemCount: 40,
          },
          10
        )
      ).toStrictEqual({
        currentPageIndex: 0,
        pageSize: 10,
        totalItemCount: 40,
      });

      expect(
        updatePageNumber(
          {
            currentPageIndex: 1,
            pageSize: 10,
            totalItemCount: 40,
          },
          25
        )
      ).toStrictEqual({
        currentPageIndex: 0,
        pageSize: 25,
        totalItemCount: 40,
      });

      expect(
        updatePageNumber(
          {
            currentPageIndex: 1,
            pageSize: 25,
            totalItemCount: 40,
          },
          10
        )
      ).toStrictEqual({
        currentPageIndex: 2,
        pageSize: 10,
        totalItemCount: 40,
      });
    });

    it('should handle when the currentPageIndex is the last page', () => {
      expect(
        updatePageNumber(
          {
            currentPageIndex: 3,
            pageSize: 10,
            totalItemCount: 40,
          },
          25
        )
      ).toStrictEqual({
        currentPageIndex: 1,
        pageSize: 25,
        totalItemCount: 40,
      });
    });
  });

  describe('generatePageNumberArray', () => {
    [
      {
        name: 'should handle initial pages case',
        minPages: 5,
        pagination: { currentPageIndex: 0, pageSize: 10, totalItemCount: 99 },
        expected: [
          { selected: true, display: '1', index: 0 },
          { selected: false, display: '2', index: 1 },
          { selected: false, display: '3', index: 2 },
          { selected: false, display: '4', index: 3 },
          { selected: false, display: '...', index: undefined },
          { selected: false, display: '10', index: 9 },
        ],
      },
      {
        name: 'should handle last pages case',
        minPages: 5,
        pagination: { currentPageIndex: 9, pageSize: 10, totalItemCount: 99 },
        expected: [
          { selected: false, display: '1', index: 0 },
          { selected: false, display: '...', index: undefined },
          { selected: false, display: '7', index: 6 },
          { selected: false, display: '8', index: 7 },
          { selected: false, display: '9', index: 8 },
          { selected: true, display: '10', index: 9 },
        ],
      },
      {
        name: 'should handle the middle pages case',
        minPages: 5,
        pagination: { currentPageIndex: 4, pageSize: 10, totalItemCount: 99 },
        expected: [
          { selected: false, display: '1', index: 0 },
          { selected: false, display: '...', index: undefined },
          { selected: false, display: '4', index: 3 },
          { selected: true, display: '5', index: 4 },
          { selected: false, display: '6', index: 5 },
          { selected: false, display: '...', index: undefined },
          { selected: false, display: '10', index: 9 },
        ],
      },
      {
        name: 'should low page number case',
        minPages: 5,
        pagination: { currentPageIndex: 2, pageSize: 10, totalItemCount: 45 },
        expected: [
          { selected: false, display: '1', index: 0 },
          { selected: false, display: '2', index: 1 },
          { selected: true, display: '3', index: 2 },
          { selected: false, display: '4', index: 3 },
          { selected: false, display: '5', index: 4 },
        ],
      },
    ].forEach(({ name, minPages, pagination, expected }) => {
      it(name, () => {
        expect(generatePageNumberArray(minPages, pagination)).toStrictEqual(expected);
      });
    });
  });
});

describe('isIPaginationProps', () => {
  const mockProps: IPaginationProps = {
    pagination: {
      pageSize: 10,
      currentPageIndex: 2,
      totalItemCount: 100,
    },
    onPaginate: () => {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should validate valid values', () => {
    expect(isIPaginationProps(mockProps)).toBe(true);
  });

  it('should validate edge cases', () => {
    expect(
      isIPaginationProps({
        ...mockProps,
        pagination: {
          pageSize: 10,
          currentPageIndex: 0,
          totalItemCount: 0,
        },
      })
    ).toBe(true);
  });

  describe('pageSize validation', () => {
    it('should catch invalid pageSize', () => {
      expect(
        isIPaginationProps({
          ...mockProps,
          pagination: {
            ...mockProps.pagination,
            pageSize: -1,
          },
        })
      ).toBe(false);
    });

    it('should console.error when pageSize fails', () => {
      isIPaginationProps({
        ...mockProps,
        pagination: {
          ...mockProps.pagination,
          pageSize: -1,
        },
      });
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('currentPageIndex validation', () => {
    it('should catch negative values', () => {
      expect(
        isIPaginationProps({
          ...mockProps,
          pagination: {
            ...mockProps.pagination,
            currentPageIndex: -1,
          },
        })
      ).toBe(false);
    });

    it('should console.error when invalid', () => {
      isIPaginationProps({
        ...mockProps,
        pagination: {
          ...mockProps.pagination,
          currentPageIndex: -1,
        },
      });
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it('if hasSelect is true, should catch values that are not in pageSizeArray', () => {
      expect(
        isIPaginationProps({
          ...mockProps,
          hasSelect: true,
          pageSizeArray: [],
          pagination: {
            pageSize: 10,
            currentPageIndex: 2,
            totalItemCount: 100,
          },
        })
      ).toBe(false);
    });

    it('if hasSelect is false, should ignore pageSizeArray', () => {
      expect(
        isIPaginationProps({
          ...mockProps,
          hasSelect: false,
          pageSizeArray: [],
          pagination: {
            pageSize: 10,
            currentPageIndex: 2,
            totalItemCount: 100,
          },
        })
      ).toBe(true);
    });

    it('should catch values that exceeds the number of pages', () => {
      expect(
        isIPaginationProps({
          ...mockProps,
          pagination: {
            pageSize: 10,
            currentPageIndex: 5,
            totalItemCount: 0,
          },
        })
      ).toBe(false);
    });
  });

  describe('totalItemCount', () => {
    it('should catch negative values', () => {
      expect(
        isIPaginationProps({
          ...mockProps,
          pagination: {
            ...mockProps.pagination,
            currentPageIndex: 0,
            totalItemCount: -1,
          },
        })
      ).toBe(false);
    });

    it('should console.error when invalid', () => {
      isIPaginationProps({
        ...mockProps,
        pagination: {
          ...mockProps.pagination,
          currentPageIndex: 0,
          totalItemCount: -1,
        },
      });
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Pagination Component', () => {
  // TODO add things
});
