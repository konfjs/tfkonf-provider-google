import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDocumentAiProcessorArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDocumentAiProcessorArgs {
  display_name: string;
  kms_key_name?: string;
  location: string;
  type: string;
  timeouts?: GoogleDocumentAiProcessorArgsTimeouts;
}

export class google_document_ai_processor extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDocumentAiProcessorArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_document_ai_processor", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
