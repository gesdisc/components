import type { DefineComponent } from "vue";

import type { TerraAlert } from "../../components/alert/alert.component.js";
import type { TerraAvatar } from "../../components/avatar/avatar.component.js";
import type { TerraAccordion } from "../../components/accordion/accordion.component.js";
import type { TerraBrowseVariables } from "../../components/browse-variables/browse-variables.component.js";
import type { TerraButton } from "../../components/button/button.component.js";
import type { TerraCaption } from "../../components/caption/caption.component.js";
import type { TerraCheckbox } from "../../components/checkbox/checkbox.component.js";
import type { TerraChip } from "../../components/chip/chip.component.js";
import type { TerraCombobox } from "../../components/combobox/combobox.component.js";
import type { TerraDataAccess } from "../../components/data-access/data-access.component.js";
import type { TerraDataRods } from "../../components/data-rods/data-rods.component.js";
import type { TerraDataSubsetter } from "../../components/data-subsetter/data-subsetter.component.js";
import type { TerraDataSubsetterHistory } from "../../components/data-subsetter-history/data-subsetter-history.component.js";
import type { TerraDatePicker } from "../../components/date-picker/date-picker.component.js";
import type { TerraDateRangeSlider } from "../../components/date-range-slider/date-range-slider.component.js";
import type { TerraDialog } from "../../components/dialog/dialog.component.js";
import type { TerraDropdown } from "../../components/dropdown/dropdown.component.js";
import type { TerraFileUpload } from "../../components/file-upload/file-upload.component.js";
import type { TerraIcon } from "../../components/icon/icon.component.js";
import type { TerraInput } from "../../components/input/input.component.js";
import type { TerraLoader } from "../../components/loader/loader.component.js";
import type { TerraLogin } from "../../components/login/login.component.js";
import type { TerraMap } from "../../components/map/map.component.js";
import type { TerraMenu } from "../../components/menu/menu.component.js";
import type { TerraMenuItem } from "../../components/menu-item/menu-item.component.js";
import type { TerraOption } from "../../components/option/option.component.js";
import type { TerraPagination } from "../../components/pagination/pagination.component.js";
import type { TerraPlot } from "../../components/plot/plot.component.js";
import type { TerraPlotToolbar } from "../../components/plot-toolbar/plot-toolbar.component.js";
import type { TerraPopup } from "../../components/popup/popup.component.js";
import type { TerraRadio } from "../../components/radio/radio.component.js";
import type { TerraRadioGroup } from "../../components/radio-group/radio-group.component.js";
import type { TerraScrollHint } from "../../components/scroll-hint/scroll-hint.component.js";
import type { TerraSelect } from "../../components/select/select.component.js";
import type { TerraSkeleton } from "../../components/skeleton/skeleton.component.js";
import type { TerraSlider } from "../../components/slider/slider.component.js";
import type { TerraSpatialPicker } from "../../components/spatial-picker/spatial-picker.component.js";
import type { TerraStatusIndicator } from "../../components/status-indicator/status-indicator.component.js";
import type { TerraTag } from "../../components/tag/tag.component.js";
import type { TerraTextarea } from "../../components/textarea/textarea.component.js";
import type { TerraTimeAverageMap } from "../../components/time-average-map/time-average-map.component.js";
import type { TerraTimeSeries, CustomEvent } from "../../components/time-series/time-series.component.js";
import type { TerraToggle } from "../../components/toggle/toggle.component.js";
import type { TerraVariableCombobox } from "../../components/variable-combobox/variable-combobox.component.js";
import type { TerraVariableKeywordSearch } from "../../components/variable-keyword-search/variable-keyword-search.component.js";

type TerraAlertProps = {
  /** Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
use the `show()` and `hide()` methods and this attribute will reflect the alert's open state. */
  open?: TerraAlert["open"];
  /** Enables a close button that allows the user to dismiss the alert. */
  closable?: TerraAlert["closable"];
  /** The alert's theme variant. */
  variant?: TerraAlert["variant"];
  /** The alert's appearance style. "filled" uses a colored background with white text (HDS default).
"white" uses a white background with a colored top border and dark text. */
  appearance?: TerraAlert["appearance"];
  /** The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
the alert will not close on its own. */
  duration?: TerraAlert["duration"];
  /** Enables a countdown that indicates the remaining time the alert will be displayed.
Typically used to indicate the remaining time before a whole app refresh. */
  countdown?: TerraAlert["countdown"];
  /**  */
  base?: TerraAlert["base"];
  /**  */
  countdownElement?: TerraAlert["countdownElement"];
  /** Emitted when the alert opens. */
  onTerraShow?: (e: CustomEvent<never>) => void;
  /** Emitted after the alert opens and all animations are complete. */
  onTerraAfterShow?: (e: CustomEvent<never>) => void;
  /** Emitted when the alert closes. */
  onTerraHide?: (e: CustomEvent<never>) => void;
  /** Emitted after the alert closes and all animations are complete. */
  onTerraAfterHide?: (e: CustomEvent<never>) => void;
};

type TerraAvatarProps = {
  /** The image source to use for the avatar. */
  image?: TerraAvatar["image"];
  /** A label to use to describe the avatar to assistive devices. */
  label?: TerraAvatar["label"];
  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  initials?: TerraAvatar["initials"];
  /** Indicates how the browser should load the image. */
  loading?: TerraAvatar["loading"];
  /** The shape of the avatar. */
  shape?: TerraAvatar["shape"];

  /** The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause. */
  onTerraError?: (e: CustomEvent<never>) => void;
};

type TerraAccordionProps = {
  /** The summary/header for the accordion. Use the property for simple text, or the slot for custom content. */
  summary?: TerraAccordion["summary"];
  /** Whether the accordion is open or not. This property is reflected as an attribute and can be controlled programmatically or by user interaction. */
  open?: TerraAccordion["open"];
  /**  */
  showArrow?: TerraAccordion["showArrow"];

  /** emitted when the accordion opens or closes */
  onTerraAccordionToggle?: (e: CustomEvent<never>) => void;
};

type TerraBrowseVariablesProps = {
  /** Allows the user to switch the catalog between different providers
TODO: add support for CMR catalog and make it the default */
  catalog?: TerraBrowseVariables["catalog"];
  /**  */
  "selected-variable-entry-ids"?: TerraBrowseVariables["selectedVariableEntryIds"];
  /**  */
  searchQuery?: TerraBrowseVariables["searchQuery"];
  /**  */
  selectedFacets?: TerraBrowseVariables["selectedFacets"];
  /**  */
  selectedVariables?: TerraBrowseVariables["selectedVariables"];
  /**  */
  showVariablesBrowse?: TerraBrowseVariables["showVariablesBrowse"];
};

type TerraButtonProps = {
  /**  */
  title?: TerraButton["title"];
  /** The button's theme variant. */
  variant?: TerraButton["variant"];
  /** The button's size. */
  size?: TerraButton["size"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  caret?: TerraButton["caret"];
  /** The button's shape. Used to control the radius edge shape when button is not in a terra-button-group. */
  shape?: TerraButton["shape"];
  /** Disables the button. */
  disabled?: TerraButton["disabled"];
  /** Draws the button in a loading state. */
  loading?: TerraButton["loading"];
  /** Draws an outlined button. */
  outline?: TerraButton["outline"];
  /** Draws a circular icon button. When this attribute is present, the button expects a single `<terra-icon>` in the
default slot. */
  circle?: TerraButton["circle"];
  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. */
  type?: TerraButton["type"];
  /** The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present. */
  name?: TerraButton["name"];
  /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter. This attribute is ignored when `href` is present. */
  value?: TerraButton["value"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href?: TerraButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  target?: TerraButton["target"];
  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively. */
  rel?: TerraButton["rel"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  download?: TerraButton["download"];
  /** The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
value of this attribute must be an id of a form in the same document or shadow root as the button. */
  form?: TerraButton["form"];
  /** Used to override the form owner's `action` attribute. */
  formaction?: TerraButton["formAction"];
  /** Used to override the form owner's `enctype` attribute. */
  formenctype?: TerraButton["formEnctype"];
  /** Used to override the form owner's `method` attribute. */
  formmethod?: TerraButton["formMethod"];
  /** Used to override the form owner's `novalidate` attribute. */
  formnovalidate?: TerraButton["formNoValidate"];
  /** Used to override the form owner's `target` attribute. */
  formtarget?: TerraButton["formTarget"];
  /** Used to connect this button to a dqialog on the page. Clicking the button will toggle the dialog's visiblity */
  "for-dialog"?: TerraButton["forDialog"];
  /**  */
  button?: TerraButton["button"];
  /**  */
  invalid?: TerraButton["invalid"];
  /** if button is used to control another element on the page, such as an accordion or dialog, this state communicates whether the controlled element is expanded */
  expanded?: TerraButton["expanded"];
  /** Gets the validity state object */
  validity?: TerraButton["validity"];
  /** Gets the validation message */
  validationMessage?: TerraButton["validationMessage"];
};

type TerraCaptionProps = {};

type TerraCheckboxProps = {
  /**  */
  title?: TerraCheckbox["title"];
  /** The name of the checkbox, submitted as a name/value pair with form data. */
  name?: TerraCheckbox["name"];
  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  value?: TerraCheckbox["value"];
  /** The checkbox's size. */
  size?: TerraCheckbox["size"];
  /** Disables the checkbox. */
  disabled?: TerraCheckbox["disabled"];
  /** Draws the checkbox in a checked state. */
  checked?: TerraCheckbox["checked"];
  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
  indeterminate?: TerraCheckbox["indeterminate"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: TerraCheckbox["form"];
  /** Makes the checkbox a required field. */
  required?: TerraCheckbox["required"];
  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: TerraCheckbox["helpText"];
  /**  */
  input?: TerraCheckbox["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: TerraCheckbox["defaultChecked"];
  /** Gets the validity state object */
  validity?: TerraCheckbox["validity"];
  /** Gets the validation message */
  validationMessage?: TerraCheckbox["validationMessage"];
  /** Emitted when the checkbox loses focus. */
  onTerraBlur?: (e: CustomEvent<never>) => void;
  /** Emitted when the checked state changes. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox gains focus. */
  onTerraFocus?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives input. */
  onTerraInput?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  onTerraInvalid?: (e: CustomEvent<never>) => void;
};

type TerraChipProps = {
  /** The size of the chip. */
  size?: TerraChip["size"];
  /** When true, the chip will have a close button that can be used to remove the chip. */
  closeable?: TerraChip["closeable"];
  /** When true, chips will stack vertically instead of sitting side by side. */
  stack?: TerraChip["stack"];
};

type TerraComboboxProps = {
  /** Label the combobox with this. */
  label?: TerraCombobox["label"];
  /** name the combobox with this. */
  name?: TerraCombobox["name"];
  /** Set a placeholder for the combobox with this.
Defaults to the label's value. */
  placeholder?: TerraCombobox["placeholder"];
  /** Hide the combobox's help text.
When hidden, not rendered at all. */
  "hide-help"?: TerraCombobox["hideHelp"];
  /** Hide the combobox's label text.
When hidden, still presents to screen readers. */
  "hide-label"?: TerraCombobox["hideLabel"];
  /** status of the content */
  status?: TerraCombobox["status"];
  /** content or data of the combobox. This could be of type string | GroupedListItem[] | ListItem[] | undefined */
  content?: TerraCombobox["content"];
  /**  */
  isExpanded?: TerraCombobox["isExpanded"];
  /**  */
  query?: TerraCombobox["query"];
  /**  */
  searchResults?: TerraCombobox["searchResults"];
};

type TerraDataAccessProps = {
  /** Collection short name used to build the Collection Entry ID. */
  "short-name"?: TerraDataAccess["shortName"];
  /** Collection version used to build the Collection Entry ID. */
  version?: TerraDataAccess["version"];
  /**  */
  limit?: TerraDataAccess["limit"];
  /**  */
  page?: TerraDataAccess["page"];
  /**  */
  search?: TerraDataAccess["search"];
  /**  */
  startDate?: TerraDataAccess["startDate"];
  /**  */
  endDate?: TerraDataAccess["endDate"];
  /**  */
  location?: TerraDataAccess["location"];
  /**  */
  cloudCover?: TerraDataAccess["cloudCover"];
  /**  */
  showDownloadMenu?: TerraDataAccess["showDownloadMenu"];
  /**  */
  cloudCoverPickerOpen?: TerraDataAccess["cloudCoverPickerOpen"];
  /**  */
  datePickerOpen?: TerraDataAccess["datePickerOpen"];
  /**  */
  spatialPickerOpen?: TerraDataAccess["spatialPickerOpen"];
  /**  */
  datePickerRef?: TerraDataAccess["datePickerRef"];
  /**  */
  spatialPickerRef?: TerraDataAccess["spatialPickerRef"];
  /**  */
  cloudCoverSliderRef?: TerraDataAccess["cloudCoverSliderRef"];
};

type TerraDataRodsProps = {
  /** a variable entry ID (ex: GPM_3IMERGHH_06_precipitationCal) */
  "variable-entry-id"?: TerraDataRods["variableEntryId"];
  /** a collection entry id (ex: GPM_3IMERGHH_06)
only required if you don't include a variableEntryId */
  collection?: TerraDataRods["collection"];
  /** a variable short name to plot (ex: precipitationCal)
only required if you don't include a variableEntryId */
  variable?: TerraDataRods["variable"];
  /** The start date for the time series plot. (ex: 2021-01-01) */
  "start-date"?: TerraDataRods["startDate"];
  /** The end date for the time series plot. (ex: 2021-01-01) */
  "end-date"?: TerraDataRods["endDate"];
  /** The point location in "lat,lon" format. */
  location?: TerraDataRods["location"];
  /** The token to be used for authentication with remote servers.
The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
The property's value will be inserted after "Bearer" (the authentication scheme). */
  "bearer-token"?: TerraDataRods["bearerToken"];
  /**  */
  catalogVariable?: TerraDataRods["catalogVariable"];
  /**  */
  _fetchVariableTask?: TerraDataRods["_fetchVariableTask"];
  /** Emitted whenever the date range of the date slider is updated */
  onTerraDateRangeChange?: (e: CustomEvent<never>) => void;
};

type TerraDataSubsetterProps = {
  /**  */
  "collection-entry-id"?: TerraDataSubsetter["collectionEntryId"];
  /**  */
  "short-name"?: TerraDataSubsetter["shortName"];
  /**  */
  version?: TerraDataSubsetter["version"];
  /**  */
  "show-collection-search"?: TerraDataSubsetter["showCollectionSearch"];
  /**  */
  "show-history-panel"?: TerraDataSubsetter["showHistoryPanel"];
  /**  */
  "job-id"?: TerraDataSubsetter["jobId"];
  /**  */
  "bearer-token"?: TerraDataSubsetter["bearerToken"];
  /**  */
  collectionWithServices?: TerraDataSubsetter["collectionWithServices"];
  /**  */
  selectedVariables?: TerraDataSubsetter["selectedVariables"];
  /**  */
  expandedVariableGroups?: TerraDataSubsetter["expandedVariableGroups"];
  /**  */
  variableFilterText?: TerraDataSubsetter["variableFilterText"];
  /**  */
  touchedFields?: TerraDataSubsetter["touchedFields"];
  /**  */
  spatialSelection?: TerraDataSubsetter["spatialSelection"];
  /**  */
  selectedDateRange?: TerraDataSubsetter["selectedDateRange"];
  /**  */
  selectedFormat?: TerraDataSubsetter["selectedFormat"];
  /**  */
  cancelingGetData?: TerraDataSubsetter["cancelingGetData"];
  /**  */
  selectedTab?: TerraDataSubsetter["selectedTab"];
  /**  */
  refineParameters?: TerraDataSubsetter["refineParameters"];
  /**  */
  showDownloadMenu?: TerraDataSubsetter["showDownloadMenu"];
  /**  */
  renderedInDialog?: TerraDataSubsetter["renderedInDialog"];
  /**  */
  collectionSearchType?: TerraDataSubsetter["collectionSearchType"];
  /**  */
  collectionSearchQuery?: TerraDataSubsetter["collectionSearchQuery"];
  /**  */
  collectionSearchLoading?: TerraDataSubsetter["collectionSearchLoading"];
  /**  */
  collectionSearchResults?: TerraDataSubsetter["collectionSearchResults"];
  /**  */
  collectionLoading?: TerraDataSubsetter["collectionLoading"];
  /**  */
  collectionAccordionOpen?: TerraDataSubsetter["collectionAccordionOpen"];
  /**  */
  dataAccessMode?: TerraDataSubsetter["dataAccessMode"];
  /**  */
  spatialPicker?: TerraDataSubsetter["spatialPicker"];
  /**  */
  controller?: TerraDataSubsetter["controller"];
  /** called when a subset job enters a final state (e.g. successful, failed, completed_with_errors) */
  onTerraSubsetJobComplete?: (e: CustomEvent<never>) => void;
};

type TerraDataSubsetterHistoryProps = {
  /**  */
  label?: TerraDataSubsetterHistory["label"];
  /**  */
  "bearer-token"?: TerraDataSubsetterHistory["bearerToken"];
  /** if a user has never done a subset request, by default they don't see the history panel at all
this prop allows you to override that behavior and always show the history panel */
  "always-show"?: TerraDataSubsetterHistory["alwaysShow"];
  /**  */
  collapsed?: TerraDataSubsetterHistory["collapsed"];
  /**  */
  selectedJob?: TerraDataSubsetterHistory["selectedJob"];
  /**  */
  hideCancelled?: TerraDataSubsetterHistory["hideCancelled"];
  /**  */
  dialog?: TerraDataSubsetterHistory["dialog"];
  /**  */
  _authController?: TerraDataSubsetterHistory["_authController"];
};

type TerraDatePickerProps = {
  /**  */
  id?: TerraDatePicker["id"];
  /**  */
  range?: TerraDatePicker["range"];
  /**  */
  "min-date"?: TerraDatePicker["minDate"];
  /**  */
  "max-date"?: TerraDatePicker["maxDate"];
  /**  */
  "start-date"?: TerraDatePicker["startDate"];
  /**  */
  "end-date"?: TerraDatePicker["endDate"];
  /**  */
  "hide-label"?: TerraDatePicker["hideLabel"];
  /**  */
  label?: TerraDatePicker["label"];
  /**  */
  "help-text"?: TerraDatePicker["helpText"];
  /**  */
  "start-label"?: TerraDatePicker["startLabel"];
  /**  */
  "end-label"?: TerraDatePicker["endLabel"];
  /**  */
  "show-presets"?: TerraDatePicker["showPresets"];
  /**  */
  presets?: TerraDatePicker["presets"];
  /**  */
  "enable-time"?: TerraDatePicker["enableTime"];
  /**  */
  "display-format"?: TerraDatePicker["displayFormat"];
  /**  */
  inline?: TerraDatePicker["inline"];
  /**  */
  "split-inputs"?: TerraDatePicker["splitInputs"];
  /**  */
  isOpen?: TerraDatePicker["isOpen"];
  /**  */
  leftMonth?: TerraDatePicker["leftMonth"];
  /**  */
  rightMonth?: TerraDatePicker["rightMonth"];
  /**  */
  selectedStart?: TerraDatePicker["selectedStart"];
  /**  */
  selectedEnd?: TerraDatePicker["selectedEnd"];
  /**  */
  hoverDate?: TerraDatePicker["hoverDate"];
  /**  */
  isSelectingRange?: TerraDatePicker["isSelectingRange"];
  /**  */
  showLeftMonthDropdown?: TerraDatePicker["showLeftMonthDropdown"];
  /**  */
  showRightMonthDropdown?: TerraDatePicker["showRightMonthDropdown"];
  /**  */
  startHour?: TerraDatePicker["startHour"];
  /**  */
  startMinute?: TerraDatePicker["startMinute"];
  /**  */
  endHour?: TerraDatePicker["endHour"];
  /**  */
  endMinute?: TerraDatePicker["endMinute"];
  /**  */
  timePeriod?: TerraDatePicker["timePeriod"];
  /**  */
  endTimePeriod?: TerraDatePicker["endTimePeriod"];
  /**  */
  selectedDates?: TerraDatePicker["selectedDates"];
  /**  */
  dropdown?: TerraDatePicker["dropdown"];
  /** Emitted when a date selection is made or changed. */
  onTerraDateRangeChange?: (e: CustomEvent<never>) => void;
};

type TerraDateRangeSliderProps = {
  /**  */
  "time-scale"?: TerraDateRangeSlider["timeScale"];
  /**  */
  "min-date"?: TerraDateRangeSlider["minDate"];
  /**  */
  "max-date"?: TerraDateRangeSlider["maxDate"];
  /** The start date for the time series plot. */
  "start-date"?: TerraDateRangeSlider["startDate"];
  /**  */
  "end-date"?: TerraDateRangeSlider["endDate"];
  /**  */
  disabled?: TerraDateRangeSlider["disabled"];
  /**  */
  "has-pips"?: TerraDateRangeSlider["hasPips"];
  /**  */
  slider?: TerraDateRangeSlider["slider"];
};

type TerraDialogProps = {
  /** the ID to be used for accessibility associations */
  id?: TerraDialog["id"];
  /** the width of the dialog */
  width?: TerraDialog["width"];
  /** used to set the dialog's open state */
  open?: TerraDialog["open"];
  /** allow closing the dialog when clicking outside of it */
  "click-outside-to-close"?: TerraDialog["clickOutsideToClose"];
  /** Show a backdrop behind the dialog */
  "show-backdrop"?: TerraDialog["showBackdrop"];
  /**  */
  dialogEl?: TerraDialog["dialogEl"];
  /** Emitted when the dialog opens. */
  onTerraDialogShow?: (e: CustomEvent<never>) => void;
  /** Emitted when the dialog closes. */
  onTerraDialogHide?: (e: CustomEvent<never>) => void;
};

type TerraDropdownProps = {
  /** Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state. */
  open?: TerraDropdown["open"];
  /** The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside of the viewport. */
  placement?: TerraDropdown["placement"];
  /** Disables the dropdown so the panel will not open. */
  disabled?: TerraDropdown["disabled"];
  /** By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions. */
  "stay-open-on-select"?: TerraDropdown["stayOpenOnSelect"];
  /** The distance in pixels from which to offset the panel away from its trigger. */
  distance?: TerraDropdown["distance"];
  /** The distance in pixels from which to offset the panel along its trigger. */
  skidding?: TerraDropdown["skidding"];
  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: TerraDropdown["hoist"];
  /** When true, the dropdown opens on mouse hover instead of click. */
  hover?: TerraDropdown["hover"];
  /** Syncs the popup width or height to that of the trigger element. */
  sync?: TerraDropdown["sync"];
  /**  */
  popup?: TerraDropdown["popup"];
  /**  */
  trigger?: TerraDropdown["trigger"];
  /**  */
  panel?: TerraDropdown["panel"];
  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
components that use a dropdown internally. */
  containingElement?: TerraDropdown["containingElement"];
  /** Emitted when the dropdown opens. */
  onTerraShow?: (e: CustomEvent<never>) => void;
  /** Emitted after the dropdown opens and all animations are complete. */
  onTerraAfterShow?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown closes. */
  onTerraHide?: (e: CustomEvent<never>) => void;
  /** Emitted after the dropdown closes and all animations are complete. */
  onTerraAfterHide?: (e: CustomEvent<never>) => void;
};

type TerraFileUploadProps = {
  /** The file upload's label. */
  label?: TerraFileUpload["label"];
  /** The file upload's help text. */
  "help-text"?: TerraFileUpload["helpText"];
  /** The name of the file input, submitted as a name/value pair with form data. */
  name?: TerraFileUpload["name"];
  /** Allows multiple files to be selected. */
  multiple?: TerraFileUpload["multiple"];
  /** Disables the file upload. */
  disabled?: TerraFileUpload["disabled"];
  /** Makes the file upload a required field. */
  required?: TerraFileUpload["required"];
  /** Accepted file types (e.g., "image/*", ".pdf", "image/png,image/jpeg"). */
  accept?: TerraFileUpload["accept"];
  /** Maximum file size in bytes. */
  "max-file-size"?: TerraFileUpload["maxFileSize"];
  /** Maximum number of files allowed when multiple is enabled. */
  "max-files"?: TerraFileUpload["maxFiles"];
  /**  */
  fileInput?: TerraFileUpload["fileInput"];
  /**  */
  dropzone?: TerraFileUpload["dropzone"];
  /** Emitted when files are selected or removed. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  onTerraFocus?: (e: CustomEvent<never>) => void;
  /** Emitted when the control loses focus. */
  onTerraBlur?: (e: CustomEvent<never>) => void;
};

type TerraIconProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  name?: TerraIcon["name"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  src?: TerraIcon["src"];
  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices. */
  label?: TerraIcon["label"];
  /** The name of a registered custom icon library. */
  library?: TerraIcon["library"];
  /** The CSS color to assign to the SVG. */
  color?: TerraIcon["color"];
  /** The CSS font-size to assign to the SVG. */
  "font-size"?: TerraIcon["fontSize"];
  /**  */
  svg?: TerraIcon["svg"];
  /** Emitted when the icon has loaded. */
  onTerraLoad?: (e: CustomEvent<never>) => void;
  /** Emitted when the icon fails to load due to an error. */
  onTerraError?: (e: CustomEvent<never>) => void;
};

type TerraInputProps = {
  /**  */
  type?: TerraInput["type"];
  /**  */
  name?: TerraInput["name"];
  /**  */
  value?: TerraInput["value"];
  /**  */
  placeholder?: TerraInput["placeholder"];
  /**  */
  disabled?: TerraInput["disabled"];
  /**  */
  readonly?: TerraInput["readonly"];
  /**  */
  required?: TerraInput["required"];
  /**  */
  autocomplete?: TerraInput["autocomplete"];
  /**  */
  minlength?: TerraInput["minlength"];
  /**  */
  maxlength?: TerraInput["maxlength"];
  /**  */
  min?: TerraInput["min"];
  /**  */
  max?: TerraInput["max"];
  /**  */
  step?: TerraInput["step"];
  /**  */
  pattern?: TerraInput["pattern"];
  /**  */
  "input-mode"?: TerraInput["inputMode"];
  /**  */
  label?: TerraInput["label"];
  /**  */
  "hide-label"?: TerraInput["hideLabel"];
  /**  */
  "help-text"?: TerraInput["helpText"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: TerraInput["form"];
  /**  */
  input?: TerraInput["input"];
  /**  */
  hasFocus?: TerraInput["hasFocus"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: TerraInput["defaultValue"];
  /** Gets the validity state object */
  validity?: TerraInput["validity"];
  /** Gets the validation message */
  validationMessage?: TerraInput["validationMessage"];
  /** Emitted when the input receives input. */
  onTerraInput?: (e: CustomEvent<never>) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  onTerraFocus?: (e: CustomEvent<never>) => void;
  /** Emitted when the control loses focus. */
  onTerraBlur?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  onTerraInvalid?: (e: CustomEvent<never>) => void;
};

type TerraLoaderProps = {
  /** The loader's variant */
  variant?: TerraLoader["variant"];
  /** The percent complete for the loader to display */
  percent?: TerraLoader["percent"];
  /** an indeterminate loader has an unknown progress and will show a spinner */
  indeterminate?: TerraLoader["indeterminate"];
  /**  */
  _currentPercent?: TerraLoader["_currentPercent"];
};

type TerraLoginProps = {
  /**  */
  "button-label"?: TerraLogin["buttonLabel"];
  /** The message to show when the user is logged in
You can use the following placeholders:
{username} - The username of the user
{first_name} - The first name of the user
{last_name} - The last name of the user */
  "logged-in-message"?: TerraLogin["loggedInMessage"];
  /**  */
  "logged-out-message"?: TerraLogin["loggedOutMessage"];
  /**  */
  "loading-message"?: TerraLogin["loadingMessage"];

  /** Emitted when a bearer token has been received from EDL. */
  onTerraLogin?: (e: CustomEvent<never>) => void;
};

type TerraMapProps = {
  /** Minimum zoom level of the map. */
  "min-zoom"?: TerraMap["minZoom"];
  /** Maximum zoom level of the map. */
  "max-zoom"?: TerraMap["maxZoom"];
  /** Initial map zoom level */
  zoom?: TerraMap["zoom"];
  /** has map navigation toolbar */
  "has-navigation"?: TerraMap["hasNavigation"];
  /** has coordinate tracker */
  "has-coord-tracker"?: TerraMap["hasCoordTracker"];
  /** has shape selector */
  "has-shape-selector"?: TerraMap["hasShapeSelector"];
  /**  */
  "hide-bounding-box-selection"?: TerraMap["hideBoundingBoxSelection"];
  /**  */
  "hide-point-selection"?: TerraMap["hidePointSelection"];
  /**  */
  staticMode?: TerraMap["staticMode"];
  /**  */
  value?: TerraMap["value"];
  /**  */
  mapElement?: TerraMap["mapElement"];
  /**  */
  map?: TerraMap["map"];
  /** List of geojson shapes */
  shapes?: TerraMap["shapes"];
  /**  */
  _mapController?: TerraMap["_mapController"];
};

type TerraMenuProps = {
  /**  */
  defaultSlot?: TerraMenu["defaultSlot"];
  /** Emitted when a menu item is selected. The event detail contains the selected menu item. */
  onTerraSelect?: (e: CustomEvent<never>) => void;
};

type TerraMenuItemProps = {
  /** The type of menu item to render. To use `checked`, this value must be set to `checkbox`. */
  type?: TerraMenuItem["type"];
  /** Draws the item in a checked state. */
  checked?: TerraMenuItem["checked"];
  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  value?: TerraMenuItem["value"];
  /** Draws the menu item in a loading state. */
  loading?: TerraMenuItem["loading"];
  /** Draws the menu item in a disabled state, preventing selection. */
  disabled?: TerraMenuItem["disabled"];
  /**  */
  defaultSlot?: TerraMenuItem["defaultSlot"];
  /**  */
  menuItem?: TerraMenuItem["menuItem"];
};

type TerraOptionProps = {
  /** The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values. */
  value?: TerraOption["value"];
  /** Draws the option in a disabled state, preventing selection. */
  disabled?: TerraOption["disabled"];
  /**  */
  defaultSlot?: TerraOption["defaultSlot"];
  /**  */
  current?: TerraOption["current"];
  /**  */
  selected?: TerraOption["selected"];
  /**  */
  hasHover?: TerraOption["hasHover"];
};

type TerraPaginationProps = {
  /** The current page number (1-indexed). */
  current?: TerraPagination["current"];
  /** The total number of pages. */
  total?: TerraPagination["total"];
  /** The pagination variant. */
  variant?: TerraPagination["variant"];
  /** Whether the pagination is centered. */
  centered?: TerraPagination["centered"];

  /** Emitted when the page changes. */
  onTerraPageChange?: (e: CustomEvent<never>) => void;
};

type TerraPlotProps = {
  /**  */
  plotTitle?: TerraPlot["plotTitle"];
  /**  */
  layout?: TerraPlot["layout"];
  /**  */
  config?: TerraPlot["config"];
  /**  */
  data?: TerraPlot["data"];
  /** Optional: Colors to assign to each time series line */
  colors?: TerraPlot["colors"];
  /**  */
  base?: TerraPlot["base"];
};

type TerraPlotToolbarProps = {
  /**  */
  catalogVariable?: TerraPlotToolbar["catalogVariable"];
  /**  */
  variableEntryId?: TerraPlotToolbar["variableEntryId"];
  /**  */
  plot?: TerraPlotToolbar["plot"];
  /**  */
  timeSeriesData?: TerraPlotToolbar["timeSeriesData"];
  /**  */
  location?: TerraPlotToolbar["location"];
  /**  */
  startDate?: TerraPlotToolbar["startDate"];
  /**  */
  endDate?: TerraPlotToolbar["endDate"];
  /**  */
  cacheKey?: TerraPlotToolbar["cacheKey"];
  /**  */
  dataType?: TerraPlotToolbar["dataType"];
  /**  */
  "show-location"?: TerraPlotToolbar["showLocation"];
  /**  */
  colormap?: TerraPlotToolbar["colormap"];
  /**  */
  opacity?: TerraPlotToolbar["opacity"];
  /**  */
  "show-citation"?: TerraPlotToolbar["showCitation"];
  /** if you include an application citation, it will be displayed in the citation panel alongside the dataset citation */
  "application-citation"?: TerraPlotToolbar["applicationCitation"];
  /**  */
  activeMenuItem?: TerraPlotToolbar["activeMenuItem"];
  /**  */
  showLocationTooltip?: TerraPlotToolbar["showLocationTooltip"];
  /**  */
  locationMapValue?: TerraPlotToolbar["locationMapValue"];
  /**  */
  colormaps?: TerraPlotToolbar["colormaps"];
  /**  */
  colorMapName?: TerraPlotToolbar["colorMapName"];
  /**  */
  menu?: TerraPlotToolbar["menu"];
  /**  */
  _authController?: TerraPlotToolbar["_authController"];
};

type TerraPopupProps = {
  /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
`anchor` slot instead. */
  anchor?: TerraPopup["anchor"];
  /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden. */
  active?: TerraPopup["active"];
  /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport. */
  placement?: TerraPopup["placement"];
  /** Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is
clipped, using a `fixed` position strategy can often workaround it. */
  strategy?: TerraPopup["strategy"];
  /** The distance in pixels from which to offset the panel away from its anchor. */
  distance?: TerraPopup["distance"];
  /** The distance in pixels from which to offset the panel along its anchor. */
  skidding?: TerraPopup["skidding"];
  /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
`--arrow-color` custom properties. For additional customizations, you can also target the arrow using
`::part(arrow)` in your stylesheet. */
  arrow?: TerraPopup["arrow"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "arrow-placement"?: TerraPopup["arrowPlacement"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "arrow-padding"?: TerraPopup["arrowPadding"];
  /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
`flipFallbackPlacements` to further configure how the fallback placement is determined. */
  flip?: TerraPopup["flip"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "flip-fallback-placements"?: TerraPopup["flipFallbackPlacements"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "flip-fallback-strategy"?: TerraPopup["flipFallbackStrategy"];
  /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  flipBoundary?: TerraPopup["flipBoundary"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "flip-padding"?: TerraPopup["flipPadding"];
  /** Moves the popup along the axis to keep it in view when clipped. */
  shift?: TerraPopup["shift"];
  /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  shiftBoundary?: TerraPopup["shiftBoundary"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "shift-padding"?: TerraPopup["shiftPadding"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "auto-size"?: TerraPopup["autoSize"];
  /** Syncs the popup's width or height to that of the anchor element. */
  sync?: TerraPopup["sync"];
  /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  autoSizeBoundary?: TerraPopup["autoSizeBoundary"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "auto-size-padding"?: TerraPopup["autoSizePadding"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "hover-bridge"?: TerraPopup["hoverBridge"];
  /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
  popup?: TerraPopup["popup"];
  /** Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it. */
  onTerraReposition?: (e: CustomEvent<never>) => void;
};

type TerraRadioProps = {
  /**  */
  title?: TerraRadio["title"];
  /** The name of the radio, submitted as a name/value pair with form data. */
  name?: TerraRadio["name"];
  /** The radio's value. When selected, the radio group will receive this value. */
  value?: TerraRadio["value"];
  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted. */
  size?: TerraRadio["size"];
  /** Disables the radio. */
  disabled?: TerraRadio["disabled"];
  /** Draws the radio in a checked state. */
  checked?: TerraRadio["checked"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: TerraRadio["form"];
  /** Makes the radio a required field. */
  required?: TerraRadio["required"];
  /**  */
  input?: TerraRadio["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: TerraRadio["defaultChecked"];
  /** Gets the validity state object */
  validity?: TerraRadio["validity"];
  /** Gets the validation message */
  validationMessage?: TerraRadio["validationMessage"];
  /** Emitted when the radio loses focus. */
  onTerraBlur?: (e: CustomEvent<never>) => void;
  /** Emitted when the checked state changes. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio gains focus. */
  onTerraFocus?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio receives input. */
  onTerraInput?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  onTerraInvalid?: (e: CustomEvent<never>) => void;
};

type TerraRadioGroupProps = {
  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
instead. */
  label?: TerraRadioGroup["label"];
  /** The radio groups's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: TerraRadioGroup["helpText"];
  /** The name of the radio group, submitted as a name/value pair with form data. */
  name?: TerraRadioGroup["name"];
  /** The current value of the radio group, submitted as a name/value pair with form data. */
  value?: TerraRadioGroup["value"];
  /** The radio group's size. This size will be applied to all child radios and radio buttons. */
  size?: TerraRadioGroup["size"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: TerraRadioGroup["form"];
  /** Ensures a child radio is checked before allowing the containing form to submit. */
  required?: TerraRadioGroup["required"];
  /**  */
  defaultSlot?: TerraRadioGroup["defaultSlot"];
  /**  */
  validationInput?: TerraRadioGroup["validationInput"];
  /**  */
  defaultValue?: TerraRadioGroup["defaultValue"];
  /** Gets the validity state object */
  validity?: TerraRadioGroup["validity"];
  /** Gets the validation message */
  validationMessage?: TerraRadioGroup["validationMessage"];
  /** Emitted when the radio group's selected value changes. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio group receives user input. */
  onTerraInput?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  onTerraInvalid?: (e: CustomEvent<never>) => void;
};

type TerraScrollHintProps = {
  /** When true, the component will be positioned inline in the DOM flow instead of fixed to the viewport. */
  inline?: TerraScrollHint["inline"];
  /** When true, forces dark mode styles regardless of system preference. Useful when placing the component on a dark background. */
  dark?: TerraScrollHint["dark"];
  /** The delay in milliseconds before showing the scroll hint after inactivity. Defaults to 3000ms (3 seconds). */
  inactivityDelay?: TerraScrollHint["inactivityDelay"];

  /** Emitted when the scroll hint is clicked and scrolling begins. */
  onTerraScroll?: (e: CustomEvent<never>) => void;
};

type TerraSelectProps = {
  /** The name of the select, submitted as a name/value pair with form data. */
  name?: TerraSelect["name"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  value?: TerraSelect["defaultValue"];
  /** The select's size. */
  size?: TerraSelect["size"];
  /** Placeholder text to show as a hint when the select is empty. */
  placeholder?: TerraSelect["placeholder"];
  /** Allows more than one option to be selected. */
  multiple?: TerraSelect["multiple"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "max-options-visible"?: TerraSelect["maxOptionsVisible"];
  /** Disables the select control. */
  disabled?: TerraSelect["disabled"];
  /** Adds a clear button when the select is not empty. */
  clearable?: TerraSelect["clearable"];
  /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
  open?: TerraSelect["open"];
  /** Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: TerraSelect["hoist"];
  /** Draws a filled select. */
  filled?: TerraSelect["filled"];
  /** Draws a pill-style select with rounded edges. */
  pill?: TerraSelect["pill"];
  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  label?: TerraSelect["label"];
  /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport. */
  placement?: TerraSelect["placement"];
  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: TerraSelect["helpText"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: TerraSelect["form"];
  /** The select's required attribute. */
  required?: TerraSelect["required"];
  /** A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value. */
  getTag?: TerraSelect["getTag"];
  /**  */
  popup?: TerraSelect["popup"];
  /**  */
  combobox?: TerraSelect["combobox"];
  /**  */
  displayInput?: TerraSelect["displayInput"];
  /**  */
  valueInput?: TerraSelect["valueInput"];
  /**  */
  listbox?: TerraSelect["listbox"];
  /**  */
  displayLabel?: TerraSelect["displayLabel"];
  /**  */
  currentOption?: TerraSelect["currentOption"];
  /**  */
  selectedOptions?: TerraSelect["selectedOptions"];
  /** The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
value attribute will be a space-delimited list of values based on the options selected, and the value property will
be an array. **For this reason, values must not contain spaces.** */
  value?: TerraSelect["value"];
  /** Gets the validity state object */
  validity?: TerraSelect["validity"];
  /** Gets the validation message */
  validationMessage?: TerraSelect["validationMessage"];
  /** Emitted when the control's value changes. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the control's value is cleared. */
  onTerraClear?: (e: CustomEvent<never>) => void;
  /** Emitted when the control receives input. */
  onTerraInput?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  onTerraFocus?: (e: CustomEvent<never>) => void;
  /** Emitted when the control loses focus. */
  onTerraBlur?: (e: CustomEvent<never>) => void;
  /** Emitted when the select's menu opens. */
  onTerraShow?: (e: CustomEvent<never>) => void;
  /** Emitted after the select's menu opens and all animations are complete. */
  onTerraAfterShow?: (e: CustomEvent<never>) => void;
  /** Emitted when the select's menu closes. */
  onTerraHide?: (e: CustomEvent<never>) => void;
  /** Emitted after the select's menu closes and all animations are complete. */
  onTerraAfterHide?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  onTerraInvalid?: (e: CustomEvent<never>) => void;
};

type TerraSkeletonProps = {
  /**  */
  rows?: TerraSkeleton["rows"];
  /**  */
  effect?: TerraSkeleton["effect"];
  /**  */
  variableWidths?: TerraSkeleton["variableWidths"];
};

type TerraSliderProps = {
  /** The slider mode - either 'single' for one value or 'range' for selecting a range. */
  mode?: TerraSlider["mode"];
  /** The minimum value of the slider. */
  min?: TerraSlider["min"];
  /** The maximum value of the slider. */
  max?: TerraSlider["max"];
  /** The step size for the slider. Use integers (1, 2, 5) for whole numbers or decimals (0.1, 0.2, 0.5) for fractional steps. */
  step?: TerraSlider["step"];
  /** Disables the slider. */
  disabled?: TerraSlider["disabled"];
  /** Shows tick marks and labels on the slider. */
  "has-pips"?: TerraSlider["hasPips"];
  /** Shows tooltips on the slider handles.
When false (default), selected values are shown in the top right instead. */
  "has-tooltips"?: TerraSlider["hasTooltips"];
  /** Shows input fields below the slider for precise value entry. */
  "show-inputs"?: TerraSlider["showInputs"];
  /** The current value for single mode sliders. */
  value?: TerraSlider["value"];
  /** The start value for range mode sliders. */
  "start-value"?: TerraSlider["startValue"];
  /** The end value for range mode sliders. */
  "end-value"?: TerraSlider["endValue"];
  /** The label text for the slider. */
  label?: TerraSlider["label"];
  /** Hide the slider's label text.
When hidden, still presents to screen readers. */
  "hide-label"?: TerraSlider["hideLabel"];
  /**  */
  slider?: TerraSlider["slider"];
};

type TerraSpatialPickerProps = {
  /** Minimum zoom level of the map. */
  "min-zoom"?: TerraSpatialPicker["minZoom"];
  /** Maximum zoom level of the map. */
  "max-zoom"?: TerraSpatialPicker["maxZoom"];
  /** Initial map zoom level */
  zoom?: TerraSpatialPicker["zoom"];
  /** has map navigation toolbar */
  "has-navigation"?: TerraSpatialPicker["hasNavigation"];
  /** has coordinate tracker */
  "has-coord-tracker"?: TerraSpatialPicker["hasCoordTracker"];
  /** has shape selector */
  "has-shape-selector"?: TerraSpatialPicker["hasShapeSelector"];
  /**  */
  "hide-bounding-box-selection"?: TerraSpatialPicker["hideBoundingBoxSelection"];
  /**  */
  "hide-point-selection"?: TerraSpatialPicker["hidePointSelection"];
  /** initialValue of spatial picker */
  "initial-value"?: TerraSpatialPicker["initialValue"];
  /** Hide the combobox's label text.
When hidden, still presents to screen readers. */
  "hide-label"?: TerraSpatialPicker["hideLabel"];
  /** spatial picker label */
  label?: TerraSpatialPicker["label"];
  /** Spatial constraints for the map (default: '-180, -90, 180, 90') */
  "spatial-constraints"?: TerraSpatialPicker["spatialConstraints"];
  /**  */
  "is-expanded"?: TerraSpatialPicker["isExpanded"];
  /** Whether the map should be shown inline, or as part of the normal content flow
the default is false, the map is positioned absolute under the input */
  inline?: TerraSpatialPicker["inline"];
  /** Whether the map should show automatically when the input is focused */
  "show-map-on-focus"?: TerraSpatialPicker["showMapOnFocus"];
  /**  */
  mapValue?: TerraSpatialPicker["mapValue"];
  /**  */
  error?: TerraSpatialPicker["error"];
  /**  */
  terraInput?: TerraSpatialPicker["terraInput"];
  /**  */
  map?: TerraSpatialPicker["map"];
  /**  */
  spatialPicker?: TerraSpatialPicker["spatialPicker"];
};

type TerraStatusIndicatorProps = {
  /** The status variant. Determines the color of the indicator dot. */
  variant?: TerraStatusIndicator["variant"];
  /** When true, forces dark mode styles regardless of system preference. Useful when placing the component on a dark background. */
  dark?: TerraStatusIndicator["dark"];
};

type TerraTagProps = {
  /** The tag variant. Determines the styling and behavior. */
  variant?: TerraTag["variant"];
  /** The size of the tag. */
  size?: TerraTag["size"];
  /** The icon name for content tags. Used with the default icon library. */
  icon?: TerraTag["icon"];
  /** The icon library to use for content tags. */
  iconLibrary?: TerraTag["iconLibrary"];
  /** When true, tags will stack vertically instead of sitting side by side. */
  stack?: TerraTag["stack"];
  /** When true, forces dark mode styles regardless of system preference. Useful when placing the component on a dark background. */
  dark?: TerraTag["dark"];
  /** The href for topic tags. If provided, the tag will be rendered as a link. */
  href?: TerraTag["href"];

  /** Emitted when a topic tag is clicked (unless href is provided). */
  onTerraClick?: (e: CustomEvent<never>) => void;
};

type TerraTextareaProps = {
  /**  */
  name?: TerraTextarea["name"];
  /**  */
  value?: TerraTextarea["value"];
  /**  */
  placeholder?: TerraTextarea["placeholder"];
  /**  */
  disabled?: TerraTextarea["disabled"];
  /**  */
  readonly?: TerraTextarea["readonly"];
  /**  */
  required?: TerraTextarea["required"];
  /**  */
  autocomplete?: TerraTextarea["autocomplete"];
  /**  */
  minlength?: TerraTextarea["minlength"];
  /**  */
  maxlength?: TerraTextarea["maxlength"];
  /**  */
  rows?: TerraTextarea["rows"];
  /**  */
  cols?: TerraTextarea["cols"];
  /**  */
  label?: TerraTextarea["label"];
  /**  */
  "hide-label"?: TerraTextarea["hideLabel"];
  /**  */
  "help-text"?: TerraTextarea["helpText"];
  /**  */
  resize?: TerraTextarea["resize"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: TerraTextarea["form"];
  /**  */
  textarea?: TerraTextarea["textarea"];
  /**  */
  hasFocus?: TerraTextarea["hasFocus"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: TerraTextarea["defaultValue"];
  /** Gets the validity state object */
  validity?: TerraTextarea["validity"];
  /** Gets the validation message */
  validationMessage?: TerraTextarea["validationMessage"];
  /** Emitted when the textarea receives input. */
  onTerraInput?: (e: CustomEvent<never>) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the textarea gains focus. */
  onTerraFocus?: (e: CustomEvent<never>) => void;
  /** Emitted when the textarea loses focus. */
  onTerraBlur?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  onTerraInvalid?: (e: CustomEvent<never>) => void;
};

type TerraTimeAverageMapProps = {
  /**  */
  collection?: TerraTimeAverageMap["collection"];
  /**  */
  variable?: TerraTimeAverageMap["variable"];
  /**  */
  "start-date"?: TerraTimeAverageMap["startDate"];
  /**  */
  "end-date"?: TerraTimeAverageMap["endDate"];
  /**  */
  location?: TerraTimeAverageMap["location"];
  /**  */
  "bearer-token"?: TerraTimeAverageMap["bearerToken"];
  /**  */
  long_name?: TerraTimeAverageMap["long_name"];
  /**  */
  catalogVariable?: TerraTimeAverageMap["catalogVariable"];
  /**  */
  pixelValue?: TerraTimeAverageMap["pixelValue"];
  /**  */
  pixelCoordinates?: TerraTimeAverageMap["pixelCoordinates"];
  /**  */
  _authController?: TerraTimeAverageMap["_authController"];
  /**  */
  colormaps?: TerraTimeAverageMap["colormaps"];
  /**  */
  colorMapName?: TerraTimeAverageMap["colorMapName"];
  /** anytime the collection or variable changes, we'll fetch the variable from the catalog to get all of it's metadata */
  _fetchVariableTask?: TerraTimeAverageMap["_fetchVariableTask"];
};

type TerraTimeSeriesProps = {
  /** a variable entry ID (ex: GPM_3IMERGHH_06_precipitationCal) */
  "variable-entry-id"?: TerraTimeSeries["variableEntryId"];
  /** a collection entry id (ex: GPM_3IMERGHH_06)
only required if you don't include a variableEntryId */
  collection?: TerraTimeSeries["collection"];
  /** a variable short name to plot (ex: precipitationCal)
only required if you don't include a variableEntryId */
  variable?: TerraTimeSeries["variable"];
  /** The start date for the time series plot. (ex: 2021-01-01) */
  "start-date"?: TerraTimeSeries["startDate"];
  /** The end date for the time series plot. (ex: 2021-01-01) */
  "end-date"?: TerraTimeSeries["endDate"];
  /** The point location in "lat,lon" format.
Or the bounding box in "west,south,east,north" format. */
  location?: TerraTimeSeries["location"];
  /**  */
  "show-citation"?: TerraTimeSeries["showCitation"];
  /** if you include an application citation, it will be displayed in the citation panel alongside the dataset citation */
  "application-citation"?: TerraTimeSeries["applicationCitation"];
  /** The token to be used for authentication with remote servers.
The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
The property's value will be inserted after "Bearer" (the authentication scheme). */
  "bearer-token"?: TerraTimeSeries["bearerToken"];
  /**  */
  plot?: TerraTimeSeries["plot"];
  /**  */
  plotToolbar?: TerraTimeSeries["plotToolbar"];
  /**  */
  catalogVariable?: TerraTimeSeries["catalogVariable"];
  /** if true, we'll show a warning to the user about them requesting a large number of data points */
  showDataPointWarning?: TerraTimeSeries["showDataPointWarning"];
  /** stores the estimated */
  estimatedDataPoints?: TerraTimeSeries["estimatedDataPoints"];
  /**  */
  _authController?: TerraTimeSeries["_authController"];
  /**  */
  _fetchVariableTask?: TerraTimeSeries["_fetchVariableTask"];
  /** Emitted whenever the date range is modified */
  onTerraDateRangeChange?: (e: CustomEvent<CustomEvent>) => void;
  /** Emitted whenever time series data has been fetched from Giovanni */
  onTerraTimeSeriesDataChange?: (e: CustomEvent<never>) => void;
};

type TerraToggleProps = {
  /**  */
  title?: TerraToggle["title"];
  /** The name of the switch, submitted as a name/value pair with form data. */
  name?: TerraToggle["name"];
  /** The current value of the switch, submitted as a name/value pair with form data. */
  value?: TerraToggle["value"];
  /** The switch's size. */
  size?: TerraToggle["size"];
  /** Disables the switch. */
  disabled?: TerraToggle["disabled"];
  /** Draws the switch in a checked state. */
  checked?: TerraToggle["checked"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: TerraToggle["form"];
  /** Makes the switch a required field. */
  required?: TerraToggle["required"];
  /** The switch's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: TerraToggle["helpText"];
  /**  */
  input?: TerraToggle["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: TerraToggle["defaultChecked"];
  /** Gets the validity state object */
  validity?: TerraToggle["validity"];
  /** Gets the validation message */
  validationMessage?: TerraToggle["validationMessage"];
  /** Emitted when the control loses focus. */
  onTerraBlur?: (e: CustomEvent<never>) => void;
  /** Emitted when the control's checked state changes. */
  onTerraChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the control receives input. */
  onTerraInput?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  onTerraFocus?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  onTerraInvalid?: (e: CustomEvent<never>) => void;
};

type TerraVariableComboboxProps = {
  /** Label the combobox with this. */
  label?: TerraVariableCombobox["label"];
  /** Set a placeholder for the combobox with this.
Defaults to the label's value. */
  placeholder?: TerraVariableCombobox["placeholder"];
  /** Hide the combobox's help text.
When hidden, not rendered at all. */
  "hide-help"?: TerraVariableCombobox["hideHelp"];
  /** Hide the combobox's label text.
When hidden, still presents to screen readers. */
  "hide-label"?: TerraVariableCombobox["hideLabel"];
  /** Determines if the variable combobox uses tags or plain text to display the query. */
  "use-tags"?: TerraVariableCombobox["useTags"];
  /** Represents the EntryID (<collection-name>_<variable-name>) of the selected variable.
Other components (like the time-series graphing component) will use this. */
  value?: TerraVariableCombobox["value"];
  /** The token to be used for authentication with remote servers.
The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
The property's value will be inserted after "Bearer" (the authentication scheme). */
  "bearer-token"?: TerraVariableCombobox["bearerToken"];
  /**  */
  isExpanded?: TerraVariableCombobox["isExpanded"];
  /**  */
  query?: TerraVariableCombobox["query"];
  /**  */
  searchResults?: TerraVariableCombobox["searchResults"];
  /**  */
  tags?: TerraVariableCombobox["tags"];
  /**  */
  tagContainerWidth?: TerraVariableCombobox["tagContainerWidth"];
  /** Emitted when an option is selected. */
  onTerraComboboxChange?: (e: CustomEvent<never>) => void;
};

type TerraVariableKeywordSearchProps = {
  /** Label the combobox with this. */
  label?: TerraVariableKeywordSearch["label"];
  /** Set a placeholder for the combobox with this.
Defaults to the label's value. */
  placeholder?: TerraVariableKeywordSearch["placeholder"];
  /** Hide the combobox's label text.
When hidden, still presents to screen readers. */
  "hide-label"?: TerraVariableKeywordSearch["hideLabel"];
  /** type can be `Boolean`, `String`, `Number`, `Object`, or `Array` */
  searchConfig?: TerraVariableKeywordSearch["searchConfig"];
  /**  */
  value?: TerraVariableKeywordSearch["value"];
  /**  */
  isExpanded?: TerraVariableKeywordSearch["isExpanded"];
  /**  */
  query?: TerraVariableKeywordSearch["query"];
  /**  */
  searchResults?: TerraVariableKeywordSearch["searchResults"];
  /** Emitted when an option is selected. */
  onTerraVariableKeywordSearchChange?: (e: CustomEvent<never>) => void;
  /** Emitted when the component is triggering a search (like a form triggering submit). */
  onTerraSearch?: (e: CustomEvent<never>) => void;
};

export type CustomElements = {
  /**
   * Alerts are used to display important messages inline or as toast notifications.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-show** - Emitted when the alert opens.
   * - **terra-after-show** - Emitted after the alert opens and all animations are complete.
   * - **terra-hide** - Emitted when the alert closes.
   * - **terra-after-hide** - Emitted after the alert closes and all animations are complete.
   *
   * ### **Methods:**
   *  - **show()** - Shows the alert.
   * - **hide()** - Hides the alert
   * - **toast()** - Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   *
   * ### **Slots:**
   *  - _default_ - The alert's main content.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **icon** - The container that wraps the optional icon.
   * - **message** - The container that wraps the alert's main content.
   */
  "terra-alert": DefineComponent<TerraAlertProps>;

  /**
   * Avatars are used to represent a person or object.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-error** - The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
   *
   * ### **Slots:**
   *  - **icon** - The default icon to use when no image or initials are present. Works best with `<terra-icon>`.
   *
   * ### **CSS Properties:**
   *  - **--size** - The size of the avatar. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **icon** - The container that wraps the avatar's icon.
   * - **initials** - The container that wraps the avatar's initials.
   * - **image** - The avatar image. Only shown when the `image` attribute is set.
   */
  "terra-avatar": DefineComponent<TerraAvatarProps>;

  /**
   * A collapsible content panel for showing and hiding content.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-accordion-toggle** - emitted when the accordion opens or closes
   *
   * ### **Slots:**
   *  - _default_ - The default slot for accordion content.
   * - **summary** - The summary/header for the accordion (optional, overrides summary property)
   */
  "terra-accordion": DefineComponent<TerraAccordionProps>;

  /**
   * Browse through the NASA CMR or Giovanni catalogs.
   * ---
   *
   */
  "terra-browse-variables": DefineComponent<TerraBrowseVariablesProps>;

  /**
   * Buttons represent actions that are available to the user.
   * ---
   *
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the button.
   * - **focus(options: _FocusOptions_)** - Sets focus on the button.
   * - **blur()** - Removes focus from the button.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - _default_ - The button's label.
   * - **prefix** - A presentational prefix icon or similar element.
   * - **suffix** - A presentational suffix icon or similar element.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **prefix** - The container that wraps the prefix.
   * - **label** - The button's label.
   * - **suffix** - The container that wraps the suffix.
   * - **caret** - The button's caret icon, an `<sl-icon>` element.
   * - **spinner** - The spinner that shows when the button is in the loading state.
   */
  "terra-button": DefineComponent<TerraButtonProps>;

  /**
   * Captions are small text blocks that describe photos, provide additional context and information, and give credit to photographers and other content owners and creators.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The caption content. Use a `<span class="credit">` element for credits, which will be displayed with higher contrast.
   *
   * ### **CSS Properties:**
   *  - **--terra-caption-font-family** - The font family for the caption. _(default: undefined)_
   * - **--terra-caption-font-size** - The font size for the caption. _(default: undefined)_
   * - **--terra-caption-font-weight** - The font weight for the caption. _(default: undefined)_
   * - **--terra-caption-line-height** - The line height for the caption. _(default: undefined)_
   * - **--terra-caption-color** - The text color for the caption. _(default: undefined)_
   * - **--terra-caption-credit-color** - The text color for credits within the caption. _(default: undefined)_
   */
  "terra-caption": DefineComponent<TerraCaptionProps>;

  /**
   * Checkboxes are a form field used when there are multiple options to select from a list.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-blur** - Emitted when the checkbox loses focus.
   * - **terra-change** - Emitted when the checked state changes.
   * - **terra-focus** - Emitted when the checkbox gains focus.
   * - **terra-input** - Emitted when the checkbox receives input.
   * - **terra-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the checkbox.
   * - **focus(options: _FocusOptions_)** - Sets focus on the checkbox.
   * - **blur()** - Removes focus from the checkbox.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   *
   * ### **Slots:**
   *  - _default_ - The checkbox's label.
   * - **help-text** - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Properties:**
   *  - **--terra-checkbox-*** - All checkbox design tokens from horizon.css are supported. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **control** - The square container that wraps the checkbox's checked state.
   * - **control--checked** - Matches the control part when the checkbox is checked.
   * - **control--indeterminate** - Matches the control part when the checkbox is indeterminate.
   * - **checked-icon** - The checked icon, an `<terra-icon>` element.
   * - **indeterminate-icon** - The indeterminate icon, an `<terra-icon>` element.
   * - **label** - The container that wraps the checkbox's label.
   * - **form-control-help-text** - The help text's wrapper.
   */
  "terra-checkbox": DefineComponent<TerraCheckboxProps>;

  /**
   * Used for contacts and tags
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The chip's label.
   *
   * ### **CSS Properties:**
   *  - **--terra-chip-background-color** - The background color of the chip. _(default: undefined)_
   * - **--terra-chip-color** - The text color of the chip. _(default: undefined)_
   */
  "terra-chip": DefineComponent<TerraChipProps>;

  /**
   * Fuzzy-search for combobox with list autocomplete.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--host-height** - The height of the host element. _(default: undefined)_
   * - **--help-height** - The height of the search help element. _(default: undefined)_
   * - **--label-height** - The height of the input's label element. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - A `search` element, the component's base.
   * - **combobox** - An `input` element used for searching.
   * - **button** - A `button` used for toggling the listbox's visibility.
   * - **listbox** - A `ul` that holds the clickable options.
   */
  "terra-combobox": DefineComponent<TerraComboboxProps>;

  /**
   * Discover and export collection granules with search, temporal, spatial, and cloud cover filters.
   * ---
   *
   */
  "terra-data-access": DefineComponent<TerraDataAccessProps>;

  /**
   * A component for visualizing Hydrology Data Rods time series using the GES DISC Giovanni API
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-date-range-change** - Emitted whenever the date range of the date slider is updated
   */
  "terra-data-rods": DefineComponent<TerraDataRodsProps>;

  /**
   * Easily allow users to select, subset, and download NASA Earth science data collections with spatial, temporal, and variable filters.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-subset-job-complete** - called when a subset job enters a final state (e.g. successful, failed, completed_with_errors)
   */
  "terra-data-subsetter": DefineComponent<TerraDataSubsetterProps>;

  /**
   * Shows a floating panel with a user's recent data subset requests and their status, with quick access to results and re-submission.
   * ---
   *
   */
  "terra-data-subsetter-history": DefineComponent<TerraDataSubsetterHistoryProps>;

  /**
   * A date picker component that implements the Horizon Design System (HDS) Date Picker patterns. Supports single date selection or date range selection with calendar popup.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-date-range-change** - Emitted when a date selection is made or changed.
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   *
   * ### **CSS Properties:**
   *  - **--terra-date-picker-*** - All date picker design tokens from horizon.css are supported. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **input** - The date input element (terra-input).
   * - **calendar** - The calendar dropdown.
   * - **sidebar** - The preset ranges sidebar.
   */
  "terra-date-picker": DefineComponent<TerraDatePickerProps>;

  /**
   * Short summary of the component's intended use.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   * - **example** - An example slot.
   *
   * ### **CSS Properties:**
   *  - **--example** - An example CSS custom property. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "terra-date-range-slider": DefineComponent<TerraDateRangeSliderProps>;

  /**
   * Used to create both modal and non-modal dialog boxes.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-dialog-show** - Emitted when the dialog opens.
   * - **terra-dialog-hide** - Emitted when the dialog closes.
   *
   * ### **Slots:**
   *  - _default_ - The dialog's main content
   */
  "terra-dialog": DefineComponent<TerraDialogProps>;

  /**
   * Dropdowns expose additional content that "drops down" in a panel.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-show** - Emitted when the dropdown opens.
   * - **terra-after-show** - Emitted after the dropdown opens and all animations are complete.
   * - **terra-hide** - Emitted when the dropdown closes.
   * - **terra-after-hide** - Emitted after the dropdown closes and all animations are complete.
   *
   * ### **Methods:**
   *  - **show()** - Shows the dropdown panel.
   * - **hide()** - Hides the dropdown panel
   * - **reposition()** - Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   *
   * ### **Slots:**
   *  - _default_ - The dropdown's main content, typically a `<terra-menu>` element.
   * - **trigger** - The dropdown's trigger, usually a `<terra-button>` element.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper, an `<terra-popup>` element.
   * - **base__popup** - The popup's exported `popup` part. Use this to target the dropdown's popup container.
   * - **trigger** - The container that wraps the trigger.
   * - **panel** - The panel that gets shown when the dropdown is open.
   */
  "terra-dropdown": DefineComponent<TerraDropdownProps>;

  /**
   * File upload fields allow visitors to attach one or multiple files to be submitted with a form.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-change** - Emitted when files are selected or removed.
   * - **terra-focus** - Emitted when the control gains focus.
   * - **terra-blur** - Emitted when the control loses focus.
   *
   * ### **Methods:**
   *  - **getFiles(): _File[]_** - Gets the current files.
   * - **clearFiles()** - Clears all selected files.
   *
   * ### **Slots:**
   *  - _default_ - Custom content to display inside the drop zone.
   *
   * ### **CSS Properties:**
   *  - **--terra-file-upload-*** - All file upload design tokens from horizon.css are supported. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **dropzone** - The drop zone area.
   * - **file-input** - The hidden file input element.
   * - **file-list** - The container for file previews.
   * - **file-item** - Individual file preview item.
   * - **file-thumbnail** - The file thumbnail image.
   * - **file-name** - The file name text.
   * - **change-link** - The "Change files" link.
   */
  "terra-file-upload": DefineComponent<TerraFileUploadProps>;

  /**
   * Icons are symbols that can be used to represent various options within an application.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-load** - Emitted when the icon has loaded.
   * - **terra-error** - Emitted when the icon fails to load due to an error.
   *
   * ### **CSS Parts:**
   *  - **svg** - The internal SVG element.
   */
  "terra-icon": DefineComponent<TerraIconProps>;

  /**
   * A text input component with consistent styling across the design system.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-input** - Emitted when the input receives input.
   * - **terra-change** - Emitted when an alteration to the control's value is committed by the user.
   * - **terra-focus** - Emitted when the control gains focus.
   * - **terra-blur** - Emitted when the control loses focus.
   * - **terra-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   *
   * ### **Slots:**
   *  - **prefix** - Used to prepend content (like an icon) to the input.
   * - **suffix** - Used to append content (like an icon) to the input.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **input** - The internal input control.
   * - **prefix** - The container for prefix content.
   * - **suffix** - The container for suffix content.
   * - **form-control-help-text** - The help text's wrapper.
   */
  "terra-input": DefineComponent<TerraInputProps>;

  /**
   * Loaders are used to indicate there is content that is loading.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--example** - An example CSS custom property. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "terra-loader": DefineComponent<TerraLoaderProps>;

  /**
   * A form that logs in to Earthdata Login (EDL) and returns a bearer token.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-login** - Emitted when a bearer token has been received from EDL.
   */
  "terra-login": DefineComponent<TerraLoginProps>;

  /**
   * A map component for visualizing and selecting coordinates.
   * ---
   *
   */
  "terra-map": DefineComponent<TerraMapProps>;

  /**
   * Menus provide a list of options for the user to choose from.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-select** - Emitted when a menu item is selected. The event detail contains the selected menu item.
   *
   * ### **Slots:**
   *  - _default_ - The menu's content, typically `<terra-menu-item>` elements.
   */
  "terra-menu": DefineComponent<TerraMenuProps>;

  /**
   * Menu items provide options for the user to pick from in a menu.
   * ---
   *
   *
   * ### **Methods:**
   *  - **getTextLabel()** - Returns a text label based on the contents of the menu item's default slot.
   *
   * ### **Slots:**
   *  - _default_ - The menu item's label.
   * - **prefix** - Used to prepend an icon or similar element to the menu item.
   * - **suffix** - Used to append an icon or similar element to the menu item.
   * - **submenu** - Used to denote a nested menu.
   *
   * ### **CSS Properties:**
   *  - **--submenu-offset** - The distance submenus shift to overlap the parent menu. _(default: -2px)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **checked-icon** - The checked icon, which is only visible when the menu item is checked.
   * - **prefix** - The prefix container.
   * - **label** - The menu item label.
   * - **suffix** - The suffix container.
   * - **spinner** - The spinner that shows when the menu item is in the loading state.
   * - **spinner__base** - The spinner's base part.
   * - **submenu-icon** - The submenu icon, visible only when the menu item has a submenu.
   */
  "terra-menu-item": DefineComponent<TerraMenuItemProps>;

  /**
   * Options define the selectable items within various form controls such as [select](/components/select).
   * ---
   *
   *
   * ### **Methods:**
   *  - **getTextLabel()** - Returns a plain text label based on the option's content.
   *
   * ### **Slots:**
   *  - _default_ - The option's label.
   * - **prefix** - Used to prepend an icon or similar element to the menu item.
   * - **suffix** - Used to append an icon or similar element to the menu item.
   *
   * ### **CSS Properties:**
   *  - **--terra-option-*** - All option design tokens from horizon.css are supported. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **checked-icon** - The checked icon, an `<terra-icon>` element.
   * - **base** - The component's base wrapper.
   * - **label** - The option's label.
   * - **prefix** - The container that wraps the prefix.
   * - **suffix** - The container that wraps the suffix.
   */
  "terra-option": DefineComponent<TerraOptionProps>;

  /**
   * Pagination is a navigational element that allows users to navigate between content or pages.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-page-change** - Emitted when the page changes.
   *
   * ### **Slots:**
   *  - _default_ - Content to display on the right side (e.g., rows per page dropdown). Only visible when variant is "left".
   *
   * ### **CSS Properties:**
   *  - **--terra-pagination-button-color** - The text color of page buttons. _(default: undefined)_
   * - **--terra-pagination-button-background-color** - The background color of page buttons. _(default: undefined)_
   * - **--terra-pagination-button-color-hover** - The text color of page buttons on hover. _(default: undefined)_
   * - **--terra-pagination-button-background-color-hover** - The background color of page buttons on hover. _(default: undefined)_
   * - **--terra-pagination-button-color-current** - The text color of the current page button. _(default: undefined)_
   * - **--terra-pagination-button-background-color-current** - The background color of the current page button. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **nav** - The navigation container.
   * - **button** - The page button elements.
   * - **button-current** - The current page button.
   * - **ellipsis** - The ellipsis element.
   * - **prev** - The previous button.
   * - **next** - The next button.
   * - **slot** - The right-side slot container.
   */
  "terra-pagination": DefineComponent<TerraPaginationProps>;

  /**
   * A web component for interactive graphs using Plotly.js.
   * ---
   *
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "terra-plot": DefineComponent<TerraPlotProps>;

  /**
   * Short summary of the component's intended use.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   * - **example** - An example slot.
   *
   * ### **CSS Properties:**
   *  - **--example** - An example CSS custom property. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "terra-plot-toolbar": DefineComponent<TerraPlotToolbarProps>;

  /**
   * Popup is a utility that lets you declaratively anchor "popup" containers to another element.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-reposition** - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
   *
   * ### **Methods:**
   *  - **reposition()** - Forces the popup to recalculate and reposition itself.
   *
   * ### **Slots:**
   *  - _default_ - The popup's content.
   * - **anchor** - The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.
   *
   * ### **CSS Properties:**
   *  - **--arrow-size** - The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used. _(default: 6px)_
   * - **--arrow-color** - The color of the arrow. _(default: var(--terra-color-carbon-black))_
   * - **--auto-size-available-width** - A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. _(default: undefined)_
   * - **--auto-size-available-height** - A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **arrow** - The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
   * - **popup** - The popup's container. Useful for setting a background color, box shadow, etc.
   * - **hover-bridge** - The hover bridge element. Only available when the `hover-bridge` option is enabled.
   */
  "terra-popup": DefineComponent<TerraPopupProps>;

  /**
   * Radio buttons are a form field used when only a single selection can be made from a list.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-blur** - Emitted when the radio loses focus.
   * - **terra-change** - Emitted when the checked state changes.
   * - **terra-focus** - Emitted when the radio gains focus.
   * - **terra-input** - Emitted when the radio receives input.
   * - **terra-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the radio.
   * - **focus(options: _FocusOptions_)** - Sets focus on the radio.
   * - **blur()** - Removes focus from the radio.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   *
   * ### **Slots:**
   *  - _default_ - The radio's label.
   *
   * ### **CSS Properties:**
   *  - **--terra-radio-*** - All radio design tokens from horizon.css are supported. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **control** - The circular container that wraps the radio's checked state.
   * - **control--checked** - The radio control when the radio is checked.
   * - **checked-icon** - The checked icon, an SVG element.
   * - **label** - The container that wraps the radio's label.
   */
  "terra-radio": DefineComponent<TerraRadioProps>;

  /**
   * Radio groups are used to group multiple radio buttons so they function as a single form control.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-change** - Emitted when the radio group's selected value changes.
   * - **terra-input** - Emitted when the radio group receives user input.
   * - **terra-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity(): _boolean_** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message)** - Sets a custom validation message. Pass an empty string to restore validity.
   * - **focus(options: _FocusOptions_)** - Sets focus on the radio-group.
   *
   * ### **Slots:**
   *  - _default_ - The default slot where `<terra-radio>` elements are placed.
   * - **label** - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
   * - **help-text** - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Properties:**
   *  - **--terra-radio-group-*** - All radio group design tokens from horizon.css are supported. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **form-control** - The form control that wraps the label, input, and help text.
   * - **form-control-label** - The label's wrapper.
   * - **form-control-input** - The input's wrapper.
   * - **form-control-help-text** - The help text's wrapper.
   */
  "terra-radio-group": DefineComponent<TerraRadioGroupProps>;

  /**
   * Scroll hint is an animated button that prompts visitors to scroll.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-scroll** - Emitted when the scroll hint is clicked and scrolling begins.
   *
   * ### **CSS Properties:**
   *  - **--terra-scroll-hint-icon-background-color** - The background color of the icon circle. _(default: undefined)_
   * - **--terra-scroll-hint-icon-color** - The color of the chevron icon. _(default: undefined)_
   * - **--terra-scroll-hint-text-color** - The color of the text. _(default: undefined)_
   * - **--terra-scroll-hint-ring-color** - The color of the pulsing ring. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **button** - The clickable button element.
   * - **icon-container** - The container for the icon and pulsing ring.
   * - **icon** - The chevron icon.
   * - **ring** - The pulsing ring around the icon.
   * - **text** - The "SCROLL TO CONTINUE" text.
   */
  "terra-scroll-hint": DefineComponent<TerraScrollHintProps>;

  /**
   * Select fields are a form field used to select one option from a list.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-change** - Emitted when the control's value changes.
   * - **terra-clear** - Emitted when the control's value is cleared.
   * - **terra-input** - Emitted when the control receives input.
   * - **terra-focus** - Emitted when the control gains focus.
   * - **terra-blur** - Emitted when the control loses focus.
   * - **terra-show** - Emitted when the select's menu opens.
   * - **terra-after-show** - Emitted after the select's menu opens and all animations are complete.
   * - **terra-hide** - Emitted when the select's menu closes.
   * - **terra-after-hide** - Emitted after the select's menu closes and all animations are complete.
   * - **terra-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **show()** - Shows the listbox.
   * - **hide()** - Hides the listbox.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   * - **focus(options: _FocusOptions_)** - Sets focus on the control.
   * - **blur()** - Removes focus from the control.
   *
   * ### **Slots:**
   *  - _default_ - The listbox options. Must be `<terra-option>` elements.
   * - **label** - The input's label. Alternatively, you can use the `label` attribute.
   * - **prefix** - Used to prepend a presentational icon or similar element to the combobox.
   * - **suffix** - Used to append a presentational icon or similar element to the combobox.
   * - **clear-icon** - An icon to use in lieu of the default clear icon.
   * - **expand-icon** - The icon to show when the control is expanded and collapsed. Rotates on open and close.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Properties:**
   *  - **--terra-select-*** - All select design tokens from horizon.css are supported. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **form-control** - The form control that wraps the label, input, and help text.
   * - **form-control-label** - The label's wrapper.
   * - **form-control-input** - The select's wrapper.
   * - **form-control-help-text** - The help text's wrapper.
   * - **combobox** - The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
   * - **prefix** - The container that wraps the prefix slot.
   * - **suffix** - The container that wraps the suffix slot.
   * - **display-input** - The element that displays the selected option's label, an `<input>` element.
   * - **listbox** - The listbox container where options are slotted.
   * - **tags** - The container that houses option tags when `multiple` is used.
   * - **tag** - The individual tags that represent each multiselect option.
   * - **clear-button** - The clear button.
   * - **expand-icon** - The container that wraps the expand icon.
   */
  "terra-select": DefineComponent<TerraSelectProps>;

  /**
   * Skeletons are loading indicators to represent where content will eventually be drawn.
   * ---
   *
   */
  "terra-skeleton": DefineComponent<TerraSkeletonProps>;

  /**
   *
   * ---
   *
   */
  "terra-slider": DefineComponent<TerraSliderProps>;

  /**
   * A component that allows input of coordinates and rendering of map.
   * ---
   *
   */
  "terra-spatial-picker": DefineComponent<TerraSpatialPickerProps>;

  /**
   * Status indicators are dynamic labels that indicate the current state of a mission or project.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The status label text.
   *
   * ### **CSS Properties:**
   *  - **--terra-status-indicator-dot-color** - The color of the status dot. _(default: undefined)_
   * - **--terra-status-indicator-label-color** - The color of the label text. _(default: undefined)_
   * - **--terra-status-indicator-font-family** - The font family for the label. _(default: undefined)_
   * - **--terra-status-indicator-font-size** - The font size for the label. _(default: undefined)_
   * - **--terra-status-indicator-font-weight** - The font weight for the label. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **dot** - The colored status dot.
   * - **label** - The text label.
   */
  "terra-status-indicator": DefineComponent<TerraStatusIndicatorProps>;

  /**
   * Tags are simple labels that help categorize items.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-click** - Emitted when a topic tag is clicked (unless href is provided).
   *
   * ### **Slots:**
   *  - _default_ - The tag label text.
   * - **icon** - Optional icon slot for content tags (overrides icon prop).
   *
   * ### **CSS Properties:**
   *  - **--terra-tag-font-family** - The font family for the tag. _(default: undefined)_
   * - **--terra-tag-font-size-small** - The font size for small tags. _(default: undefined)_
   * - **--terra-tag-font-size-medium** - The font size for medium tags. _(default: undefined)_
   * - **--terra-tag-font-size-large** - The font size for large tags. _(default: undefined)_
   * - **--terra-tag-font-weight** - The font weight for the tag. _(default: undefined)_
   * - **--terra-tag-font-weight-urgent** - The font weight for urgent tags. _(default: undefined)_
   * - **--terra-tag-color** - The text color of the tag. _(default: undefined)_
   * - **--terra-tag-background-color** - The background color of the tag. _(default: undefined)_
   * - **--terra-tag-border-color** - The border color for topic tags. _(default: undefined)_
   * - **--terra-tag-border-color-hover** - The border color for topic tags on hover. _(default: undefined)_
   * - **--terra-tag-background-color-hover** - The background color for topic tags on hover. _(default: undefined)_
   * - **--terra-tag-icon-border-color** - The border color for content tag icons. _(default: undefined)_
   * - **--terra-tag-icon-size-small** - The size of small content tag icons. _(default: undefined)_
   * - **--terra-tag-icon-size-medium** - The size of medium content tag icons. _(default: undefined)_
   * - **--terra-tag-icon-size-large** - The size of large content tag icons. _(default: undefined)_
   * - **--terra-tag-icon-inner-size-small** - The inner icon size for small content tags. _(default: undefined)_
   * - **--terra-tag-icon-inner-size-medium** - The inner icon size for medium content tags. _(default: undefined)_
   * - **--terra-tag-icon-inner-size-large** - The inner icon size for large content tags. _(default: undefined)_
   * - **--terra-tag-urgent-color** - The text color for urgent tags. _(default: undefined)_
   * - **--terra-tag-urgent-background-color** - The background color for urgent tags. _(default: undefined)_
   * - **--terra-tag-padding-small** - The padding for small topic/urgent tags. _(default: undefined)_
   * - **--terra-tag-padding-medium** - The padding for medium topic/urgent tags. _(default: undefined)_
   * - **--terra-tag-padding-large** - The padding for large topic/urgent tags. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **icon** - The icon element (content tags only).
   * - **label** - The text label.
   */
  "terra-tag": DefineComponent<TerraTagProps>;

  /**
   * A textarea component with consistent styling across the design system.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-input** - Emitted when the textarea receives input.
   * - **terra-change** - Emitted when an alteration to the control's value is committed by the user.
   * - **terra-focus** - Emitted when the textarea gains focus.
   * - **terra-blur** - Emitted when the textarea loses focus.
   * - **terra-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   *
   * ### **Slots:**
   *  - **help-text** - Text that describes how to use the textarea. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **textarea** - The internal textarea control.
   * - **form-control-help-text** - The help text's wrapper.
   */
  "terra-textarea": DefineComponent<TerraTextareaProps>;

  /**
   *
   * ---
   *
   */
  "terra-time-average-map": DefineComponent<TerraTimeAverageMapProps>;

  /**
   * A component for visualizing time series data using the GES DISC Giovanni API.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-date-range-change** - Emitted whenever the date range is modified
   * - **terra-time-series-data-change** - Emitted whenever time series data has been fetched from Giovanni
   */
  "terra-time-series": DefineComponent<TerraTimeSeriesProps>;

  /**
   * Switches allow the user to toggle an option on or off.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-blur** - Emitted when the control loses focus.
   * - **terra-change** - Emitted when the control's checked state changes.
   * - **terra-input** - Emitted when the control receives input.
   * - **terra-focus** - Emitted when the control gains focus.
   * - **terra-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the switch.
   * - **focus(options: _FocusOptions_)** - Sets focus on the switch.
   * - **blur()** - Removes focus from the switch.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - _default_ - The switch's label.
   * - **help-text** - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Properties:**
   *  - **--width** - The width of the switch. _(default: undefined)_
   * - **--height** - The height of the switch. _(default: undefined)_
   * - **--thumb-size** - The size of the thumb. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **control** - The control that houses the switch's thumb.
   * - **thumb** - The switch's thumb.
   * - **label** - The switch's label.
   * - **form-control-help-text** - The help text's wrapper.
   */
  "terra-toggle": DefineComponent<TerraToggleProps>;

  /**
   * Fuzzy-search for dataset variables in combobox with list autocomplete.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-combobox-change** - Emitted when an option is selected.
   *
   * ### **Methods:**
   *  - **valueChanged(oldValue: _string_, newValue: _string_)** - This component's value is read by other components.
   * Internally, the variable metdata has slight differences that require adapting.
   *
   * ### **CSS Properties:**
   *  - **--host-height** - The height of the host element. _(default: undefined)_
   * - **--help-height** - The height of the search help element. _(default: undefined)_
   * - **--label-height** - The height of the input's label element. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - A `search` element, the component's base.
   * - **combobox** - An `input` element used for searching.
   * - **button** - A `button` used for toggling the listbox's visibility.
   * - **listbox** - A `ul` that holds the clickable options.
   */
  "terra-variable-combobox": DefineComponent<TerraVariableComboboxProps>;

  /**
   * Fuzzy-search for dataset keywords in combobox with list autocomplete.
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-variable-keyword-search-change** - Emitted when an option is selected.
   * - **terra-search** - Emitted when the component is triggering a search (like a form triggering submit).
   *
   * ### **CSS Properties:**
   *  - **--host-height** - The height of the host element. _(default: undefined)_
   * - **--label-height** - The height of the input's label element. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - A `search` element, the component's base.
   * - **combobox** - An `input` element used for searching.
   * - **button** - A `button` used for toggling the listbox's visibility.
   * - **listbox** - A `ul` that holds the clickable options.
   */
  "terra-variable-keyword-search": DefineComponent<TerraVariableKeywordSearchProps>;
};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
