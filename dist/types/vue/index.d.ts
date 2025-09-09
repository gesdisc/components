import type { DefineComponent } from "vue";

import type { TerraAccordion } from "../../components/accordion/accordion.component.js";
import type { TerraAlert } from "../../components/alert/alert.component.js";
import type { TerraBrowseVariables } from "../../components/browse-variables/browse-variables.component.js";
import type { TerraButton } from "../../components/button/button.component.js";
import type { TerraChip } from "../../components/chip/chip.component.js";
import type { TerraCombobox } from "../../components/combobox/combobox.component.js";
import type { TerraDataSubsetter } from "../../components/data-subsetter/data-subsetter.component.js";
import type { TerraDataSubsetterHistory } from "../../components/data-subsetter-history/data-subsetter-history.component.js";
import type { TerraDataRods } from "../../components/data-rods/data-rods.component.js";
import type { TerraDatePicker } from "../../components/date-picker/date-picker.component.js";
import type { TerraDateRangeSlider } from "../../components/date-range-slider/date-range-slider.component.js";
import type { TerraDialog } from "../../components/dialog/dialog.component.js";
import type { TerraIcon } from "../../components/icon/icon.component.js";
import type { TerraLoader } from "../../components/loader/loader.component.js";
import type { TerraLogin } from "../../components/login/login.component.js";
import type { TerraMap } from "../../components/map/map.component.js";
import type { TerraPlot } from "../../components/plot/plot.component.js";
import type { TerraPlotToolbar } from "../../components/plot-toolbar/plot-toolbar.component.js";
import type { TerraSkeleton } from "../../components/skeleton/skeleton.component.js";
import type { TerraSpatialPicker } from "../../components/spatial-picker/spatial-picker.component.js";
import type { TerraTimeAverageMap } from "../../components/time-average-map/time-average-map.component.js";
import type { TerraTimeSeries, CustomEvent } from "../../components/time-series/time-series.component.js";
import type { TerraVariableCombobox } from "../../components/variable-combobox/variable-combobox.component.js";
import type { TerraVariableKeywordSearch } from "../../components/variable-keyword-search/variable-keyword-search.component.js";

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

type TerraAlertProps = {
  /** Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
use the `show()` and `hide()` methods and this attribute will reflect the alert's open state. */
  open?: TerraAlert["open"];
  /** Enables a close button that allows the user to dismiss the alert. */
  closable?: TerraAlert["closable"];
  /** The alert's theme variant. */
  variant?: TerraAlert["variant"];
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

type TerraChipProps = {
  /**  */
  size?: TerraChip["size"];
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

type TerraDataSubsetterProps = {
  /**  */
  "collection-entry-id"?: TerraDataSubsetter["collectionEntryId"];
  /**  */
  "show-collection-search"?: TerraDataSubsetter["showCollectionSearch"];
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
  spatialPicker?: TerraDataSubsetter["spatialPicker"];
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
  /** Emitted whenever the date range of the date slider is updated */
  onTerraDateRangeChange?: (e: CustomEvent<never>) => void;
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
  "default-date"?: TerraDatePicker["defaultDate"];
  /**  */
  "allow-input"?: TerraDatePicker["allowInput"];
  /**  */
  "alt-format"?: TerraDatePicker["altFormat"];
  /**  */
  "alt-input"?: TerraDatePicker["altInput"];
  /**  */
  "alt-input-class"?: TerraDatePicker["altInputClass"];
  /**  */
  "date-format"?: TerraDatePicker["dateFormat"];
  /**  */
  "enable-time"?: TerraDatePicker["enableTime"];
  /**  */
  "time-24hr"?: TerraDatePicker["time24hr"];
  /**  */
  "week-numbers"?: TerraDatePicker["weekNumbers"];
  /**  */
  static?: TerraDatePicker["static"];
  /**  */
  position?: TerraDatePicker["position"];
  /**  */
  "show-months"?: TerraDatePicker["showMonths"];
  /**  */
  "hide-label"?: TerraDatePicker["hideLabel"];
  /**  */
  label?: TerraDatePicker["label"];
  /**  */
  selectedDates?: TerraDatePicker["selectedDates"];
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

type TerraPlotProps = {
  /**  */
  plotTitle?: TerraPlot["plotTitle"];
  /**  */
  layout?: TerraPlot["layout"];
  /**  */
  config?: TerraPlot["config"];
  /**  */
  data?: TerraPlot["data"];
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
  activeMenuItem?: TerraPlotToolbar["activeMenuItem"];
  /**  */
  menu?: TerraPlotToolbar["menu"];
};

type TerraSkeletonProps = {
  /**  */
  rows?: TerraSkeleton["rows"];
  /**  */
  effect?: TerraSkeleton["effect"];
  /**  */
  variableWidths?: TerraSkeleton["variableWidths"];
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
  spatialInput?: TerraSpatialPicker["spatialInput"];
  /**  */
  map?: TerraSpatialPicker["map"];
};

type TerraTimeAverageMapProps = {
  /** a collection entry id (ex: GPM_3IMERGHH_06) */
  collection?: TerraTimeAverageMap["collection"];
  /**  */
  variable?: TerraTimeAverageMap["variable"];
  /**  */
  "start-date"?: TerraTimeAverageMap["startDate"];
  /**  */
  "end-date"?: TerraTimeAverageMap["endDate"];
  /** The point location in "lat,lon" format.
Or the bounding box in "west,south,east,north" format. */
  location?: TerraTimeAverageMap["location"];
  /** The token to be used for authentication with remote servers.
The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
The property's value will be inserted after "Bearer" (the authentication scheme). */
  "bearer-token"?: TerraTimeAverageMap["bearerToken"];
  /**  */
  long_name?: TerraTimeAverageMap["long_name"];
  /**  */
  activeMenuItem?: TerraTimeAverageMap["activeMenuItem"];
  /**  */
  menu?: TerraTimeAverageMap["menu"];
  /**  */
  catalogVariable?: TerraTimeAverageMap["catalogVariable"];
  /**  */
  _authController?: TerraTimeAverageMap["_authController"];
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
  /** Emitted whenever the date range is modified */
  onTerraDateRangeChange?: (e: CustomEvent<CustomEvent>) => void;
  /** Emitted whenever time series data has been fetched from Giovanni */
  onTerraTimeSeriesDataChange?: (e: CustomEvent<never>) => void;
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
   * Used for contacts and tags
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The chip's label.
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
   * A component for visualizing Hydrology Data Rods time series using the GES DISC Giovanni API
   * ---
   *
   *
   * ### **Events:**
   *  - **terra-date-range-change** - Emitted whenever the date range of the date slider is updated
   */
  "terra-data-rods": DefineComponent<TerraDataRodsProps>;

  /**
   * A date picker component that supports single date selection or date range selection.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **input** - The date input element.
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
   * Skeletons are loading indicators to represent where content will eventually be drawn.
   * ---
   *
   */
  "terra-skeleton": DefineComponent<TerraSkeletonProps>;

  /**
   * A component that allows input of coordinates and rendering of map.
   * ---
   *
   */
  "terra-spatial-picker": DefineComponent<TerraSpatialPickerProps>;

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
