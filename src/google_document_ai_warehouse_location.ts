import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDocumentAiWarehouseLocationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDocumentAiWarehouseLocationArgs {
  access_control_mode: string;
  database_type: string;
  document_creator_default_role?: string;
  kms_key?: string;
  location: string;
  project_number: string;
  timeouts?: GoogleDocumentAiWarehouseLocationArgsTimeouts;
}

export class google_document_ai_warehouse_location extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDocumentAiWarehouseLocationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_document_ai_warehouse_location", resourceName);
  }

  get access_control_mode(): string {
    return `${this.resourceType}.${this.resourceName}.access_control_mode`;
  }

  get database_type(): string {
    return `${this.resourceType}.${this.resourceName}.database_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get project_number(): string {
    return `${this.resourceType}.${this.resourceName}.project_number`;
  }
}
