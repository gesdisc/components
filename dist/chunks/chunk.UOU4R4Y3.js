import {
  date_picker_styles_default
} from "./chunk.KRTUT5P3.js";
import {
  TerraInput
} from "./chunk.FUZEDMWI.js";
import {
  TerraButton
} from "./chunk.ZHKSN4LM.js";
import {
  watch
} from "./chunk.IGV6JSNT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  e,
  n,
  r
} from "./chunk.ZQH2A4BE.js";
import {
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/date-picker/date-picker.component.ts
init_dirname();
init_buffer();
init_process();
var TerraDatePicker = class extends TerraElement {
  constructor() {
    super();
    this.range = false;
    this.hideLabel = false;
    this.label = "Select Date";
    this.helpText = "";
    this.showPresets = false;
    this.presets = [];
    this.enableTime = false;
    this.inline = false;
    this.splitInputs = false;
    this.isOpen = false;
    this.leftMonth = /* @__PURE__ */ new Date();
    this.rightMonth = /* @__PURE__ */ new Date();
    this.selectedStart = null;
    this.selectedEnd = null;
    this.hoverDate = null;
    this.isSelectingRange = false;
    this.showLeftMonthDropdown = false;
    this.showRightMonthDropdown = false;
    this.startHour = 12;
    this.startMinute = 0;
    this.endHour = 12;
    this.endMinute = 0;
    this.timePeriod = "AM";
    this.endTimePeriod = "PM";
    this.selectedDates = {
      startDate: (/* @__PURE__ */ new Date()).toString(),
      endDate: (/* @__PURE__ */ new Date()).toString()
    };
    this.DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    this.MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.ignoreClickOutside = false;
    this.boundHandleClickOutside = this.handleClickOutside.bind(this);
    this.initializePresets();
  }
  getBounds() {
    const min = this.minDate ? new Date(this.minDate) : void 0;
    const max = this.maxDate ? new Date(this.maxDate) : void 0;
    return { min, max };
  }
  doesRangeOverlapBounds(range) {
    const { startDate, endDate } = range;
    const { min, max } = this.getBounds();
    if (!this.range) {
      if (!startDate)
        return false;
      if (min && startDate < min)
        return false;
      if (max && startDate > max)
        return false;
      return true;
    }
    const start = startDate != null ? startDate : /* @__PURE__ */ new Date(-864e13);
    const end = endDate != null ? endDate : /* @__PURE__ */ new Date(864e13);
    if (!min && !max)
      return true;
    const windowStart = min != null ? min : /* @__PURE__ */ new Date(-864e13);
    const windowEnd = max != null ? max : /* @__PURE__ */ new Date(864e13);
    return end >= windowStart && start <= windowEnd;
  }
  isPresetWithinBounds(range) {
    return this.doesRangeOverlapBounds(range);
  }
  get filteredPresets() {
    return (this.presets || []).filter(
      (preset) => this.isPresetWithinBounds(preset.getValue())
    );
  }
  open() {
    this.isOpen = true;
    this.ignoreClickOutside = true;
    if (this.maxDate && !this.selectedStart && !this.selectedEnd) {
      const max = new Date(this.maxDate);
      if (!isNaN(max.getTime())) {
        if (this.range) {
          this.rightMonth = new Date(max);
          const left = new Date(max);
          left.setMonth(left.getMonth() - 1);
          this.leftMonth = left;
        } else {
          this.leftMonth = new Date(max);
        }
      }
    }
    this.requestUpdate();
  }
  close() {
    this.isOpen = false;
    this.requestUpdate();
  }
  setOpen(open) {
    if (open) {
      this.open();
    } else {
      this.close();
    }
  }
  handleInlineChange() {
    if (this.inline) {
      this.isOpen = true;
      document.removeEventListener("click", this.boundHandleClickOutside);
    } else {
      document.addEventListener("click", this.boundHandleClickOutside);
    }
  }
  handleStartEndDateChange() {
    if (this.startDate) {
      const start = new Date(this.startDate);
      if (!isNaN(start.getTime())) {
        this.selectedStart = start;
        this.leftMonth = new Date(start);
        if (this.enableTime) {
          this.initializeTimeFromDate(start, true);
        }
      }
    } else {
      this.selectedStart = null;
    }
    if (this.range) {
      if (this.endDate) {
        const end = new Date(this.endDate);
        if (!isNaN(end.getTime())) {
          this.selectedEnd = end;
          this.rightMonth = new Date(end);
          if (this.enableTime) {
            this.initializeTimeFromDate(end, false);
          }
        }
      } else {
        this.selectedEnd = null;
        if (this.selectedStart) {
          this.rightMonth = new Date(this.leftMonth);
          this.rightMonth.setMonth(this.rightMonth.getMonth() + 1);
        }
      }
    } else {
      this.selectedEnd = null;
    }
  }
  initializePresets() {
    if (this.presets.length === 0) {
      this.presets = [
        {
          label: "Today",
          getValue: () => {
            const today = /* @__PURE__ */ new Date();
            return {
              startDate: today,
              endDate: this.range ? today : null
            };
          }
        },
        {
          label: "Yesterday",
          getValue: () => {
            const yesterday = /* @__PURE__ */ new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return {
              startDate: yesterday,
              endDate: this.range ? yesterday : null
            };
          }
        },
        {
          label: "Last 7 days",
          getValue: () => {
            const end = /* @__PURE__ */ new Date();
            const start = /* @__PURE__ */ new Date();
            start.setDate(start.getDate() - 6);
            return { startDate: start, endDate: end };
          }
        },
        {
          label: "Last 30 days",
          getValue: () => {
            const end = /* @__PURE__ */ new Date();
            const start = /* @__PURE__ */ new Date();
            start.setDate(start.getDate() - 29);
            return { startDate: start, endDate: end };
          }
        },
        {
          label: "Last 6 months",
          getValue: () => {
            const end = /* @__PURE__ */ new Date();
            const start = /* @__PURE__ */ new Date();
            start.setMonth(start.getMonth() - 6);
            return { startDate: start, endDate: end };
          }
        },
        {
          label: "Last year",
          getValue: () => {
            const end = /* @__PURE__ */ new Date();
            const start = /* @__PURE__ */ new Date();
            start.setFullYear(start.getFullYear() - 1);
            return { startDate: start, endDate: end };
          }
        },
        {
          label: "All time",
          getValue: () => {
            const { min, max } = this.getBounds();
            return {
              startDate: min || null,
              endDate: max || null
            };
          }
        }
      ];
    }
  }
  firstUpdated() {
    const params = new URLSearchParams(window.location.search);
    const timeStartParam = params.get("time_start") || this.startDate;
    const timeEndParam = params.get("time_end") || this.endDate;
    if (timeStartParam) {
      this.selectedStart = new Date(timeStartParam);
      this.leftMonth = new Date(this.selectedStart);
      if (this.enableTime) {
        this.initializeTimeFromDate(this.selectedStart, true);
      }
    }
    if (this.range && timeEndParam) {
      this.selectedEnd = new Date(timeEndParam);
      this.rightMonth = new Date(this.selectedEnd);
      if (this.enableTime) {
        this.initializeTimeFromDate(this.selectedEnd, false);
      }
    }
    if (this.range && !timeEndParam) {
      this.rightMonth = new Date(this.leftMonth);
      this.rightMonth.setMonth(this.rightMonth.getMonth() + 1);
    }
    if (this.inline) {
      this.isOpen = true;
    }
    if (!this.inline) {
      document.addEventListener("click", this.boundHandleClickOutside);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.boundHandleClickOutside);
  }
  handleClickOutside(event) {
    if (this.inline) {
      return;
    }
    if (this.ignoreClickOutside) {
      this.ignoreClickOutside = false;
      return;
    }
    if (!this.contains(event.target)) {
      this.isOpen = false;
    }
  }
  toggleDropdown(event) {
    event.stopPropagation();
    this.setOpen(!this.isOpen);
  }
  formatDisplayDate(date, isStart = true) {
    if (!date)
      return "";
    const format = this.displayFormat || (this.enableTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    let hours;
    let minutes;
    let seconds;
    if (this.enableTime) {
      const hour12 = isStart ? this.startHour : this.endHour;
      const period = isStart ? this.timePeriod : this.endTimePeriod;
      let hour24 = hour12;
      if (period === "PM" && hour12 !== 12) {
        hour24 = hour12 + 12;
      } else if (period === "AM" && hour12 === 12) {
        hour24 = 0;
      }
      hours = String(hour24).padStart(2, "0");
      minutes = String(isStart ? this.startMinute : this.endMinute).padStart(
        2,
        "0"
      );
      seconds = "00";
    } else {
      hours = String(date.getHours()).padStart(2, "0");
      minutes = String(date.getMinutes()).padStart(2, "0");
      seconds = String(date.getSeconds()).padStart(2, "0");
    }
    return format.replace("YYYY", year.toString()).replace("MM", month).replace("DD", day).replace("HH", hours).replace("mm", minutes).replace("ss", seconds);
  }
  getDisplayValue() {
    if (this.range) {
      if (this.selectedStart && this.selectedEnd) {
        return `${this.formatDisplayDate(this.selectedStart, true)} \u2013 ${this.formatDisplayDate(this.selectedEnd, false)}`;
      } else if (this.selectedStart) {
        return this.formatDisplayDate(this.selectedStart, true);
      }
      return "Select date range";
    } else {
      return this.selectedStart ? this.formatDisplayDate(this.selectedStart, true) : "Select date";
    }
  }
  getStartDateDisplayValue() {
    return this.selectedStart ? this.formatDisplayDate(this.selectedStart, true) : "Start date";
  }
  getEndDateDisplayValue() {
    return this.selectedEnd ? this.formatDisplayDate(this.selectedEnd, false) : "End date";
  }
  previousMonth(isLeft) {
    if (isLeft) {
      const newMonth = new Date(this.leftMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      this.leftMonth = newMonth;
    } else {
      const newMonth = new Date(this.rightMonth);
      newMonth.setMonth(newMonth.getMonth() - 1);
      this.rightMonth = newMonth;
    }
  }
  nextMonth(isLeft) {
    if (isLeft) {
      const newMonth = new Date(this.leftMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      this.leftMonth = newMonth;
    } else {
      const newMonth = new Date(this.rightMonth);
      newMonth.setMonth(newMonth.getMonth() + 1);
      this.rightMonth = newMonth;
    }
  }
  toggleMonthDropdown(isLeft, event) {
    event.stopPropagation();
    if (isLeft) {
      this.showLeftMonthDropdown = !this.showLeftMonthDropdown;
      this.showRightMonthDropdown = false;
    } else {
      this.showRightMonthDropdown = !this.showRightMonthDropdown;
      this.showLeftMonthDropdown = false;
    }
  }
  selectMonth(month, isLeft) {
    if (isLeft) {
      const newMonth = new Date(this.leftMonth);
      newMonth.setMonth(month);
      this.leftMonth = newMonth;
      this.showLeftMonthDropdown = false;
    } else {
      const newMonth = new Date(this.rightMonth);
      newMonth.setMonth(month);
      this.rightMonth = newMonth;
      this.showRightMonthDropdown = false;
    }
  }
  changeYear(delta, isLeft) {
    if (isLeft) {
      const newMonth = new Date(this.leftMonth);
      newMonth.setFullYear(newMonth.getFullYear() + delta);
      this.leftMonth = newMonth;
    } else {
      const newMonth = new Date(this.rightMonth);
      newMonth.setFullYear(newMonth.getFullYear() + delta);
      this.rightMonth = newMonth;
    }
  }
  handleYearInput(event, isLeft) {
    const input = event.target;
    const year = parseInt(input.value, 10);
    if (!isNaN(year) && year >= 1900 && year <= 2100) {
      if (isLeft) {
        const newMonth = new Date(this.leftMonth);
        newMonth.setFullYear(year);
        this.leftMonth = newMonth;
      } else {
        const newMonth = new Date(this.rightMonth);
        newMonth.setFullYear(year);
        this.rightMonth = newMonth;
      }
    }
  }
  getDaysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(year, month, -i);
      days.push(day);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    const remainingDays = 7 - days.length % 7;
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(new Date(year, month + 1, i));
      }
    }
    return days;
  }
  isSameDay(date1, date2) {
    if (!date1 || !date2)
      return false;
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  isInRange(date) {
    if (!this.selectedStart || !this.selectedEnd)
      return false;
    const time = date.getTime();
    return time >= this.selectedStart.getTime() && time <= this.selectedEnd.getTime();
  }
  isInHoverRange(date) {
    if (!this.range || !this.selectedStart || !this.hoverDate || this.selectedEnd)
      return false;
    const time = date.getTime();
    const start = Math.min(this.selectedStart.getTime(), this.hoverDate.getTime());
    const end = Math.max(this.selectedStart.getTime(), this.hoverDate.getTime());
    return time >= start && time <= end;
  }
  isDisabled(date) {
    if (this.minDate) {
      const min = new Date(this.minDate);
      if (date < min)
        return true;
    }
    if (this.maxDate) {
      const max = new Date(this.maxDate);
      if (date > max)
        return true;
    }
    return false;
  }
  selectDate(date) {
    if (this.isDisabled(date))
      return;
    if (this.range) {
      if (!this.selectedStart || this.selectedEnd) {
        this.selectedStart = date;
        this.selectedEnd = null;
        this.isSelectingRange = true;
      } else {
        if (date < this.selectedStart) {
          this.selectedEnd = this.selectedStart;
          this.selectedStart = date;
        } else {
          this.selectedEnd = date;
        }
        this.isSelectingRange = false;
        this.emitChange();
        if (!this.inline) {
          this.isOpen = false;
        }
      }
    } else {
      this.selectedStart = date;
      this.selectedEnd = null;
      this.emitChange();
      if (!this.inline) {
        this.isOpen = false;
      }
    }
  }
  handleDateHover(date) {
    if (this.range && this.selectedStart && !this.selectedEnd) {
      this.hoverDate = date;
    }
  }
  selectPreset(preset) {
    const { startDate, endDate } = preset.getValue();
    if (!this.isPresetWithinBounds({ startDate, endDate })) {
      return;
    }
    const { min, max } = this.getBounds();
    if (this.range) {
      let s = startDate;
      let e2 = endDate;
      if (s && min && s < min)
        s = new Date(min);
      if (s && max && s > max)
        s = new Date(max);
      if (e2 && min && e2 < min)
        e2 = new Date(min);
      if (e2 && max && e2 > max)
        e2 = new Date(max);
      if (s && e2 && e2 < s) {
        const tmp = s;
        s = e2;
        e2 = tmp;
      }
      this.selectedStart = s;
      this.selectedEnd = e2;
    } else {
      let s = startDate;
      if (s && min && s < min)
        s = new Date(min);
      if (s && max && s > max)
        s = new Date(max);
      this.selectedStart = s;
      this.selectedEnd = null;
    }
    if (this.selectedStart) {
      this.leftMonth = new Date(this.selectedStart);
      if (this.range && this.selectedEnd) {
        this.rightMonth = new Date(this.selectedEnd);
      }
    }
    this.emitChange();
    if (!this.range && !this.inline) {
      this.isOpen = false;
    }
  }
  emitChange() {
    let startDateTime = "";
    let endDateTime = "";
    if (this.selectedStart) {
      if (this.enableTime) {
        const startDate = new Date(this.selectedStart);
        let hours = this.startHour;
        if (this.timePeriod === "PM" && hours !== 12)
          hours += 12;
        if (this.timePeriod === "AM" && hours === 12)
          hours = 0;
        startDate.setHours(hours, this.startMinute, 0, 0);
        startDateTime = startDate.toISOString();
      } else {
        startDateTime = this.selectedStart.toISOString().split("T")[0];
      }
    }
    if (this.selectedEnd) {
      if (this.enableTime) {
        const endDate = new Date(this.selectedEnd);
        let hours = this.endHour;
        if (this.endTimePeriod === "PM" && hours !== 12)
          hours += 12;
        if (this.endTimePeriod === "AM" && hours === 12)
          hours = 0;
        endDate.setHours(hours, this.endMinute, 0, 0);
        endDateTime = endDate.toISOString();
      } else {
        endDateTime = this.selectedEnd.toISOString().split("T")[0];
      }
    }
    this.emit("terra-date-range-change", {
      detail: {
        startDate: startDateTime,
        endDate: endDateTime
      }
    });
  }
  initializeTimeFromDate(date, isStart) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    if (hours === 0)
      hours = 12;
    else if (hours > 12)
      hours -= 12;
    if (isStart) {
      this.startHour = hours;
      this.startMinute = minutes;
      this.timePeriod = period;
    } else {
      this.endHour = hours;
      this.endMinute = minutes;
      this.endTimePeriod = period;
    }
  }
  changeTime(type, delta, isStart) {
    if (type === "hour") {
      if (isStart) {
        let newHour = this.startHour + delta;
        if (newHour > 12)
          newHour = 1;
        if (newHour < 1)
          newHour = 12;
        this.startHour = newHour;
      } else {
        let newHour = this.endHour + delta;
        if (newHour > 12)
          newHour = 1;
        if (newHour < 1)
          newHour = 12;
        this.endHour = newHour;
      }
    } else {
      if (isStart) {
        let newMinute = this.startMinute + delta;
        if (newMinute >= 60)
          newMinute = 0;
        if (newMinute < 0)
          newMinute = 59;
        this.startMinute = newMinute;
      } else {
        let newMinute = this.endMinute + delta;
        if (newMinute >= 60)
          newMinute = 0;
        if (newMinute < 0)
          newMinute = 59;
        this.endMinute = newMinute;
      }
    }
  }
  handleTimeInput(event, type, isStart) {
    const input = event.target;
    let value = parseInt(input.value, 10);
    if (type === "hour") {
      if (isNaN(value) || value < 1 || value > 12) {
        input.value = isStart ? this.startHour.toString().padStart(2, "0") : this.endHour.toString().padStart(2, "0");
        return;
      }
      if (isStart)
        this.startHour = value;
      else
        this.endHour = value;
    } else {
      if (isNaN(value) || value < 0 || value >= 60) {
        input.value = isStart ? this.startMinute.toString().padStart(2, "0") : this.endMinute.toString().padStart(2, "0");
        return;
      }
      if (isStart)
        this.startMinute = value;
      else
        this.endMinute = value;
    }
  }
  togglePeriod(isStart) {
    if (isStart) {
      this.timePeriod = this.timePeriod === "AM" ? "PM" : "AM";
    } else {
      this.endTimePeriod = this.endTimePeriod === "AM" ? "PM" : "AM";
    }
  }
  renderCalendar(month, isLeft = true) {
    const days = this.getDaysInMonth(month);
    const currentMonth = month.getMonth();
    const showDropdown = isLeft ? this.showLeftMonthDropdown : this.showRightMonthDropdown;
    return x`
            <div class="calendar">
                <div class="calendar__header">
                    <button
                        type="button"
                        class="calendar__nav"
                        @click=${() => this.previousMonth(isLeft)}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M10 12L6 8L10 4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>

                    <div class="calendar__month-year">
                        <div class="calendar__month-dropdown-wrapper">
                            <button
                                type="button"
                                class="calendar__month-button"
                                @click=${(e2) => this.toggleMonthDropdown(isLeft, e2)}
                            >
                                ${this.MONTHS[month.getMonth()]}
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    class="calendar__month-icon"
                                >
                                    <path
                                        d="M3 5L6 8L9 5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>

                            ${showDropdown ? x`
                                      <div class="calendar__month-dropdown">
                                          ${this.MONTHS.map(
      (monthName, index) => x`
                                                  <button
                                                      type="button"
                                                      class="calendar__month-option ${index === month.getMonth() ? "calendar__month-option--selected" : ""}"
                                                      @click=${() => this.selectMonth(
        index,
        isLeft
      )}
                                                  >
                                                      ${index === month.getMonth() ? x`
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    class="calendar__month-check"
                                                                >
                                                                    <path
                                                                        d="M13 4L6 11L3 8"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            ` : ""}
                                                      ${monthName}
                                                  </button>
                                              `
    )}
                                      </div>
                                  ` : ""}
                        </div>

                        <div class="calendar__year-input-wrapper">
                            <input
                                type="number"
                                class="calendar__year-input"
                                .value=${month.getFullYear().toString()}
                                @input=${(e2) => this.handleYearInput(e2, isLeft)}
                                @blur=${(e2) => {
      const input = e2.target;
      input.value = month.getFullYear().toString();
    }}
                                min="1900"
                                max="2100"
                            />
                            <div class="calendar__year-spinners">
                                <button
                                    type="button"
                                    class="calendar__year-spinner calendar__year-spinner--up"
                                    @click=${() => this.changeYear(1, isLeft)}
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 6L5 3L8 6"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="calendar__year-spinner calendar__year-spinner--down"
                                    @click=${() => this.changeYear(-1, isLeft)}
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 4L5 7L8 4"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="calendar__nav"
                        @click=${() => this.nextMonth(isLeft)}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div class="calendar__weekdays">
                    ${this.DAYS.map(
      (day) => x`<div class="calendar__weekday">${day}</div>`
    )}
                </div>
                <div class="calendar__days">
                    ${days.map((date) => {
      const isCurrentMonth = date.getMonth() === currentMonth;
      const isSelected = this.isSameDay(date, this.selectedStart) || this.isSameDay(date, this.selectedEnd);
      const isStart = this.isSameDay(date, this.selectedStart);
      const isEnd = this.isSameDay(date, this.selectedEnd);
      const inRange = this.isInRange(date);
      const inHoverRange = this.isInHoverRange(date);
      const isDisabled = this.isDisabled(date);
      return x`
                            <button
                                type="button"
                                class="calendar__day ${!isCurrentMonth ? "calendar__day--outside" : ""} 
                                       ${isSelected ? "calendar__day--selected" : ""}
                                       ${isStart ? "calendar__day--start" : ""}
                                       ${isEnd ? "calendar__day--end" : ""}
                                       ${inRange ? "calendar__day--in-range" : ""}
                                       ${inHoverRange ? "calendar__day--hover-range" : ""}
                                       ${isDisabled ? "calendar__day--disabled" : ""}"
                                @click=${() => this.selectDate(date)}
                                @mouseenter=${() => this.handleDateHover(date)}
                                ?disabled=${isDisabled}
                            >
                                ${date.getDate()}
                            </button>
                        `;
    })}
                </div>
            </div>
        `;
  }
  renderTimePicker() {
    if (!this.enableTime)
      return "";
    return x`
            <div class="date-picker__time">
                <div class="date-picker__time-section">
                    <div class="date-picker__time-inputs">
                        <div class="date-picker__time-input-group">
                            <input
                                type="number"
                                class="date-picker__time-input"
                                .value=${this.startHour.toString().padStart(2, "0")}
                                @input=${(e2) => this.handleTimeInput(e2, "hour", true)}
                                @blur=${(e2) => {
      const input = e2.target;
      input.value = this.startHour.toString().padStart(2, "0");
    }}
                                min="1"
                                max="12"
                            />
                            <div class="date-picker__time-spinners">
                                <button
                                    type="button"
                                    class="date-picker__time-spinner"
                                    @click=${() => this.changeTime("hour", 1, true)}
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 6L5 3L8 6"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="date-picker__time-spinner"
                                    @click=${() => this.changeTime("hour", -1, true)}
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 4L5 7L8 4"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <span class="date-picker__time-separator">:</span>

                        <div class="date-picker__time-input-group">
                            <input
                                type="number"
                                class="date-picker__time-input"
                                .value=${this.startMinute.toString().padStart(2, "0")}
                                @input=${(e2) => this.handleTimeInput(e2, "minute", true)}
                                @blur=${(e2) => {
      const input = e2.target;
      input.value = this.startMinute.toString().padStart(2, "0");
    }}
                                min="0"
                                max="59"
                            />
                            <div class="date-picker__time-spinners">
                                <button
                                    type="button"
                                    class="date-picker__time-spinner"
                                    @click=${() => this.changeTime("minute", 1, true)}
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 6L5 3L8 6"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    class="date-picker__time-spinner"
                                    @click=${() => this.changeTime("minute", -1, true)}
                                >
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 4L5 7L8 4"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            class="date-picker__time-period"
                            @click=${() => this.togglePeriod(true)}
                        >
                            ${this.timePeriod}
                        </button>
                    </div>
                </div>

                ${this.range ? x`
                          <span class="date-picker__separator">–</span>

                          <div class="date-picker__time-section">
                              <div class="date-picker__time-inputs">
                                  <div class="date-picker__time-input-group">
                                      <input
                                          type="number"
                                          class="date-picker__time-input"
                                          .value=${this.endHour.toString().padStart(2, "0")}
                                          @input=${(e2) => this.handleTimeInput(e2, "hour", false)}
                                          @blur=${(e2) => {
      const input = e2.target;
      input.value = this.endHour.toString().padStart(2, "0");
    }}
                                          min="1"
                                          max="12"
                                      />
                                      <div class="date-picker__time-spinners">
                                          <button
                                              type="button"
                                              class="date-picker__time-spinner"
                                              @click=${() => this.changeTime("hour", 1, false)}
                                          >
                                              <svg
                                                  width="10"
                                                  height="10"
                                                  viewBox="0 0 10 10"
                                                  fill="none"
                                              >
                                                  <path
                                                      d="M2 6L5 3L8 6"
                                                      stroke="currentColor"
                                                      stroke-width="1.5"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                  />
                                              </svg>
                                          </button>
                                          <button
                                              type="button"
                                              class="date-picker__time-spinner"
                                              @click=${() => this.changeTime("hour", -1, false)}
                                          >
                                              <svg
                                                  width="10"
                                                  height="10"
                                                  viewBox="0 0 10 10"
                                                  fill="none"
                                              >
                                                  <path
                                                      d="M2 4L5 7L8 4"
                                                      stroke="currentColor"
                                                      stroke-width="1.5"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                  />
                                              </svg>
                                          </button>
                                      </div>
                                  </div>

                                  <span class="date-picker__time-separator">:</span>

                                  <div class="date-picker__time-input-group">
                                      <input
                                          type="number"
                                          class="date-picker__time-input"
                                          .value=${this.endMinute.toString().padStart(2, "0")}
                                          @input=${(e2) => this.handleTimeInput(
      e2,
      "minute",
      false
    )}
                                          @blur=${(e2) => {
      const input = e2.target;
      input.value = this.endMinute.toString().padStart(2, "0");
    }}
                                          min="0"
                                          max="59"
                                      />
                                      <div class="date-picker__time-spinners">
                                          <button
                                              type="button"
                                              class="date-picker__time-spinner"
                                              @click=${() => this.changeTime("minute", 1, false)}
                                          >
                                              <svg
                                                  width="10"
                                                  height="10"
                                                  viewBox="0 0 10 10"
                                                  fill="none"
                                              >
                                                  <path
                                                      d="M2 6L5 3L8 6"
                                                      stroke="currentColor"
                                                      stroke-width="1.5"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                  />
                                              </svg>
                                          </button>
                                          <button
                                              type="button"
                                              class="date-picker__time-spinner"
                                              @click=${() => this.changeTime(
      "minute",
      -1,
      false
    )}
                                          >
                                              <svg
                                                  width="10"
                                                  height="10"
                                                  viewBox="0 0 10 10"
                                                  fill="none"
                                              >
                                                  <path
                                                      d="M2 4L5 7L8 4"
                                                      stroke="currentColor"
                                                      stroke-width="1.5"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                  />
                                              </svg>
                                          </button>
                                      </div>
                                  </div>

                                  <button
                                      type="button"
                                      class="date-picker__time-period"
                                      @click=${() => this.togglePeriod(false)}
                                  >
                                      ${this.endTimePeriod}
                                  </button>
                              </div>
                          </div>
                      ` : ""}
            </div>
        `;
  }
  renderCalendarIcon() {
    return x`
            <svg
                slot="suffix"
                class="date-picker__icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
        `;
  }
  render() {
    const showSplitInputs = this.range && this.splitInputs;
    return x`
            <div
                class="date-picker ${this.inline ? "date-picker--inline" : ""} ${showSplitInputs ? "date-picker--split-inputs" : ""}"
                @click=${(e2) => e2.stopPropagation()}
            >
                ${showSplitInputs ? x`
                          <div class="date-picker__inputs">
                              <terra-input
                                  .label=${this.startLabel || (this.label ? `${this.label} (Start)` : "Start Date")}
                                  .hideLabel=${this.hideLabel}
                                  .helpText=${this.helpText}
                                  .value=${this.getStartDateDisplayValue()}
                                  readonly
                                  @click=${this.inline ? void 0 : this.toggleDropdown}
                              >
                                  ${this.renderCalendarIcon()}
                              </terra-input>
                              <terra-input
                                  .label=${this.endLabel || (this.label ? `${this.label} (End)` : "End Date")}
                                  .hideLabel=${this.hideLabel}
                                  .helpText=${this.helpText}
                                  .value=${this.getEndDateDisplayValue()}
                                  readonly
                                  @click=${this.inline ? void 0 : this.toggleDropdown}
                              >
                                  ${this.renderCalendarIcon()}
                              </terra-input>
                          </div>
                      ` : x`
                          <terra-input
                              .label=${this.label}
                              .hideLabel=${this.hideLabel}
                              .helpText=${this.helpText}
                              .value=${this.getDisplayValue()}
                              readonly
                              @click=${this.inline ? void 0 : this.toggleDropdown}
                          >
                              ${this.renderCalendarIcon()}
                          </terra-input>
                      `}

                <div class="date-picker__dropdown-wrapper">
                    ${this.isOpen || this.inline ? x`
                              <div
                                  class="date-picker__dropdown ${this.inline ? "date-picker__dropdown--inline" : ""}"
                                  part="calendar"
                              >
                                  <div class="date-picker__content">
                                      ${this.showPresets && this.filteredPresets.length > 0 ? x`
                                                <div
                                                    class="date-picker__sidebar"
                                                    part="sidebar"
                                                >
                                                    ${this.filteredPresets.map(
      (preset) => x`
                                                            <button
                                                                type="button"
                                                                class="date-picker__preset"
                                                                @click=${() => this.selectPreset(
        preset
      )}
                                                            >
                                                                ${preset.label}
                                                            </button>
                                                        `
    )}
                                                </div>
                                            ` : ""}

                                      <div class="date-picker__calendars">
                                          ${this.renderCalendar(this.leftMonth, true)}
                                          ${this.range ? this.renderCalendar(
      this.rightMonth,
      false
    ) : ""}
                                      </div>
                                  </div>

                                  ${this.enableTime ? this.renderTimePicker() : ""}
                              </div>
                          ` : ""}
                </div>
            </div>
        `;
  }
};
TerraDatePicker.styles = [component_styles_default, date_picker_styles_default];
TerraDatePicker.dependencies = {
  "terra-button": TerraButton,
  "terra-input": TerraInput
};
__decorateClass([
  n()
], TerraDatePicker.prototype, "id", 2);
__decorateClass([
  n({ type: Boolean })
], TerraDatePicker.prototype, "range", 2);
__decorateClass([
  n({ attribute: "min-date" })
], TerraDatePicker.prototype, "minDate", 2);
__decorateClass([
  n({ attribute: "max-date" })
], TerraDatePicker.prototype, "maxDate", 2);
__decorateClass([
  n({ attribute: "start-date" })
], TerraDatePicker.prototype, "startDate", 2);
__decorateClass([
  n({ attribute: "end-date" })
], TerraDatePicker.prototype, "endDate", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], TerraDatePicker.prototype, "hideLabel", 2);
__decorateClass([
  n()
], TerraDatePicker.prototype, "label", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraDatePicker.prototype, "helpText", 2);
__decorateClass([
  n({ attribute: "start-label" })
], TerraDatePicker.prototype, "startLabel", 2);
__decorateClass([
  n({ attribute: "end-label" })
], TerraDatePicker.prototype, "endLabel", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-presets" })
], TerraDatePicker.prototype, "showPresets", 2);
__decorateClass([
  n({ type: Array })
], TerraDatePicker.prototype, "presets", 2);
__decorateClass([
  n({ type: Boolean, attribute: "enable-time" })
], TerraDatePicker.prototype, "enableTime", 2);
__decorateClass([
  n({ attribute: "display-format" })
], TerraDatePicker.prototype, "displayFormat", 2);
__decorateClass([
  n({ type: Boolean })
], TerraDatePicker.prototype, "inline", 2);
__decorateClass([
  n({ type: Boolean, attribute: "split-inputs" })
], TerraDatePicker.prototype, "splitInputs", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "isOpen", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "leftMonth", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "rightMonth", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "selectedStart", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "selectedEnd", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "hoverDate", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "isSelectingRange", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "showLeftMonthDropdown", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "showRightMonthDropdown", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "startHour", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "startMinute", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "endHour", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "endMinute", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "timePeriod", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "endTimePeriod", 2);
__decorateClass([
  r()
], TerraDatePicker.prototype, "selectedDates", 2);
__decorateClass([
  e(".date-picker__dropdown")
], TerraDatePicker.prototype, "dropdown", 2);
__decorateClass([
  watch("inline")
], TerraDatePicker.prototype, "handleInlineChange", 1);
__decorateClass([
  watch(["startDate", "endDate"])
], TerraDatePicker.prototype, "handleStartEndDateChange", 1);

export {
  TerraDatePicker
};
