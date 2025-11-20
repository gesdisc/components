import {
  file_upload_styles_default
} from "./chunk.DKWODWWJ.js";
import {
  o
} from "./chunk.VORUIAGH.js";
import {
  e
} from "./chunk.XMZR4BZJ.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  e as e2,
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

// src/components/file-upload/file-upload.component.ts
init_dirname();
init_buffer();
init_process();
var TerraFileUpload = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.files = [];
    this.isDragging = false;
    this.hasFocus = false;
    this.label = "Upload";
    this.helpText = "";
    this.name = "";
    this.multiple = false;
    this.disabled = false;
    this.required = false;
    this.accept = "";
    this.handleDragOver = (event) => {
      if (this.disabled)
        return;
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = true;
    };
    this.handleDragLeave = (event) => {
      if (this.disabled)
        return;
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = false;
    };
    this.handleDrop = (event) => {
      var _a;
      if (this.disabled)
        return;
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = false;
      const droppedFiles = (_a = event.dataTransfer) == null ? void 0 : _a.files;
      if (droppedFiles && droppedFiles.length > 0) {
        this.handleFiles(Array.from(droppedFiles));
      }
    };
    this.handleFileInputChange = (event) => {
      const input = event.target;
      if (input.files && input.files.length > 0) {
        this.handleFiles(Array.from(input.files));
      }
    };
    this.handleClick = () => {
      if (!this.disabled) {
        this.fileInput.click();
      }
    };
    this.handleChangeFiles = () => {
      this.handleClick();
    };
    this.handleFocus = () => {
      this.hasFocus = true;
      this.emit("terra-focus");
    };
    this.handleBlur = () => {
      this.hasFocus = false;
      this.emit("terra-blur");
    };
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    this.setupDragAndDrop();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupDragAndDrop();
    this.files.forEach((file) => {
      if (file.preview && file.preview.startsWith("blob:")) {
        URL.revokeObjectURL(file.preview);
      }
    });
  }
  setupDragAndDrop() {
    if (this.dropzone) {
      this.dropzone.addEventListener("dragover", this.handleDragOver);
      this.dropzone.addEventListener("dragleave", this.handleDragLeave);
      this.dropzone.addEventListener("drop", this.handleDrop);
    }
  }
  cleanupDragAndDrop() {
    if (this.dropzone) {
      this.dropzone.removeEventListener("dragover", this.handleDragOver);
      this.dropzone.removeEventListener("dragleave", this.handleDragLeave);
      this.dropzone.removeEventListener("drop", this.handleDrop);
    }
  }
  handleFiles(newFiles) {
    let filesToAdd = newFiles;
    if (this.multiple && this.maxFiles) {
      const remaining = this.maxFiles - this.files.length;
      if (remaining <= 0) {
        return;
      }
      filesToAdd = filesToAdd.slice(0, remaining);
    } else if (!this.multiple) {
      filesToAdd = [filesToAdd[0]];
    }
    if (this.maxFileSize) {
      filesToAdd = filesToAdd.filter((file) => file.size <= this.maxFileSize);
    }
    const filesWithPreviews = filesToAdd.map((file) => {
      const fileWithPreview = file;
      if (file.type.startsWith("image/")) {
        fileWithPreview.preview = URL.createObjectURL(file);
      }
      return fileWithPreview;
    });
    if (this.multiple) {
      this.files = [...this.files, ...filesWithPreviews];
    } else {
      this.files.forEach((file) => {
        if (file.preview && file.preview.startsWith("blob:")) {
          URL.revokeObjectURL(file.preview);
        }
      });
      this.files = filesWithPreviews;
    }
    this.emit("terra-change");
  }
  /** Gets the current files. */
  getFiles() {
    return [...this.files];
  }
  /** Clears all selected files. */
  clearFiles() {
    this.files.forEach((file) => {
      if (file.preview && file.preview.startsWith("blob:")) {
        URL.revokeObjectURL(file.preview);
      }
    });
    this.files = [];
    if (this.fileInput) {
      this.fileInput.value = "";
    }
    this.emit("terra-change");
  }
  render() {
    const hasFiles = this.files.length > 0;
    const fileCount = this.files.length;
    return x`
            <div class="file-upload-wrapper">
                ${this.label ? x`
                          <label for="file-input" class="file-upload__label">
                              ${this.label}
                              ${this.required ? x`<span class="file-upload__required-indicator"
                                        >*</span
                                    >` : ""}
                          </label>
                      ` : ""}
                ${hasFiles ? x`
                          <div class="file-upload__preview">
                              <div class="file-upload__preview-header">
                                  <strong class="file-upload__file-count"
                                      >${fileCount}
                                      ${fileCount === 1 ? "file" : "files"}
                                      selected</strong
                                  >
                                  <button
                                      type="button"
                                      class="file-upload__change-link"
                                      @click=${this.handleChangeFiles}
                                      ?disabled=${this.disabled}
                                  >
                                      Change files
                                  </button>
                              </div>
                              <div class="file-upload__file-list">
                                  ${this.files.map(
      (file) => x`
                                          <div
                                              class="file-upload__file-item"
                                              part="file-item"
                                          >
                                              ${file.preview ? x`
                                                        <img
                                                            part="file-thumbnail"
                                                            class="file-upload__thumbnail"
                                                            src=${file.preview}
                                                            alt=${file.name}
                                                        />
                                                    ` : x`
                                                        <div
                                                            class="file-upload__thumbnail file-upload__thumbnail--placeholder"
                                                        >
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                                <path
                                                                    d="M14 2V8H20"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                    `}
                                              <span
                                                  part="file-name"
                                                  class="file-upload__file-name"
                                                  >${file.name}</span
                                              >
                                          </div>
                                      `
    )}
                              </div>
                          </div>
                      ` : x`
                          <div
                              part="dropzone"
                              class=${e({
      "file-upload__dropzone": true,
      "file-upload__dropzone--dragging": this.isDragging,
      "file-upload__dropzone--focused": this.hasFocus,
      "file-upload__dropzone--disabled": this.disabled
    })}
                              @click=${this.handleClick}
                              @keydown=${(e3) => {
      if ((e3.key === "Enter" || e3.key === " ") && !this.disabled) {
        e3.preventDefault();
        this.handleClick();
      }
    }}
                              @focus=${this.handleFocus}
                              @blur=${this.handleBlur}
                              tabindex=${this.disabled ? "-1" : "0"}
                              role="button"
                              aria-label="Upload files"
                          >
                              <slot>
                                  <span class="file-upload__dropzone-text">
                                      Drag files here or
                                      <button
                                          type="button"
                                          class="file-upload__browse-link"
                                          @click=${(e3) => {
      e3.stopPropagation();
      this.handleClick();
    }}
                                      >
                                          choose from folder
                                      </button>
                                  </span>
                              </slot>
                          </div>
                      `}

                <input
                    part="file-input"
                    class="file-upload__input"
                    id="file-input"
                    type="file"
                    name=${o(this.name || void 0)}
                    ?multiple=${this.multiple}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    accept=${o(this.accept || void 0)}
                    @change=${this.handleFileInputChange}
                    tabindex="-1"
                />

                ${this.helpText ? x`<div class="file-upload__help-text">${this.helpText}</div>` : ""}
            </div>
        `;
  }
};
TerraFileUpload.styles = [component_styles_default, file_upload_styles_default];
__decorateClass([
  e2(".file-upload__input")
], TerraFileUpload.prototype, "fileInput", 2);
__decorateClass([
  e2(".file-upload__dropzone")
], TerraFileUpload.prototype, "dropzone", 2);
__decorateClass([
  r()
], TerraFileUpload.prototype, "files", 2);
__decorateClass([
  r()
], TerraFileUpload.prototype, "isDragging", 2);
__decorateClass([
  r()
], TerraFileUpload.prototype, "hasFocus", 2);
__decorateClass([
  n()
], TerraFileUpload.prototype, "label", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraFileUpload.prototype, "helpText", 2);
__decorateClass([
  n()
], TerraFileUpload.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraFileUpload.prototype, "multiple", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraFileUpload.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraFileUpload.prototype, "required", 2);
__decorateClass([
  n()
], TerraFileUpload.prototype, "accept", 2);
__decorateClass([
  n({ type: Number, attribute: "max-file-size" })
], TerraFileUpload.prototype, "maxFileSize", 2);
__decorateClass([
  n({ type: Number, attribute: "max-files" })
], TerraFileUpload.prototype, "maxFiles", 2);

export {
  TerraFileUpload
};
