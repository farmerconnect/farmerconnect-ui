import { IPaginationProps, isIPaginationProps } from './interfaces';
const consoleErrorSpy = jest.spyOn(global.console, 'error');

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
