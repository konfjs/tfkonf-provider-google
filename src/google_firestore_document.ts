import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirestoreDocumentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirestoreDocumentArgs {
  collection: string;
  database?: string;
  document_id: string;
  fields: string;
  timeouts?: GoogleFirestoreDocumentArgsTimeouts;
}

export class google_firestore_document extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirestoreDocumentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firestore_document", resourceName);
  }

  get collection(): string {
    return `${this.resourceType}.${this.resourceName}.collection`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get document_id(): string {
    return `${this.resourceType}.${this.resourceName}.document_id`;
  }

  get fields(): string {
    return `${this.resourceType}.${this.resourceName}.fields`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get path(): string {
    return `${this.resourceType}.${this.resourceName}.path`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
