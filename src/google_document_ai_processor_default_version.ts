import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDocumentAiProcessorDefaultVersionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDocumentAiProcessorDefaultVersionArgs {
  processor: string;
  version: string;
  timeouts?: GoogleDocumentAiProcessorDefaultVersionArgsTimeouts;
}

export class google_document_ai_processor_default_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDocumentAiProcessorDefaultVersionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_document_ai_processor_default_version", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get processor(): string {
    return `${this.resourceType}.${this.resourceName}.processor`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
