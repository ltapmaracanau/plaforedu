import React from "react";

import { Select, Spin } from "antd";
import _, { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";

const DebounceSelect = React.forwardRef(function DebounceSelect(
  { fetchOptions, optionsToInclude = [], debounceTimeout = 800, ...props },
  ref
) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  const loadOptions = useCallback(
    async ({ query, page, reset = false }) => {
      setFetching(true);
      if (reset) {
        setOptions([]);
      }
      const newOptions = await fetchOptions({
        query,
        page,
      });
      setOptions((old) => (page > 1 ? [...old, ...newOptions] : newOptions));
      setFetching(false);
    },
    [fetchOptions]
  );

  const debounceFetcher = useMemo(() => {
    return debounce(loadOptions, debounceTimeout);
  }, [loadOptions, debounceTimeout]);

  useEffect(() => {
    loadOptions({
      query: "",
      page: 1,
    });
  }, [loadOptions]);

  return (
    <Select
      ref={ref}
      filterOption={false}
      showSearch
      onSearch={(value) => {
        setQuery(value);
        debounceFetcher({
          query: value,
          page: 1,
          reset: true,
        });
      }}
      onPopupScroll={(e) => {
        if (
          e.target.scrollTop + e.target.clientHeight ===
          e.target.scrollHeight
        ) {
          if (fetching) {
            return;
          }
          loadOptions({
            query,
            page: page + 1,
          });
          setPage((old) => old + 1);
        }
      }}
      options={_.unionBy(optionsToInclude, options, "value").concat(
        fetching
          ? [
              {
                label: (
                  <div style={{ textAlign: "center" }}>
                    <Spin size="small" />
                  </div>
                ),
                value: "loading",
              },
            ]
          : []
      )}
      onChange={(newValue) => {
        const selected = options.find((option) => option.value === newValue);
        props.onChange(newValue, selected);
      }}
      {...props}
    />
  );
});

export default DebounceSelect;
