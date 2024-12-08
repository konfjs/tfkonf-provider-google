import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirestoreIndexArgsFieldsVectorConfigFlat {
}

export interface GoogleFirestoreIndexArgsFieldsVectorConfig {
  dimension?: number;
  flat?: GoogleFirestoreIndexArgsFieldsVectorConfigFlat;
}

export interface GoogleFirestoreIndexArgsFields {
  array_config?: string;
  field_path?: string;
  order?: string;
  vector_config?: GoogleFirestoreIndexArgsFieldsVectorConfig;
}

export interface GoogleFirestoreIndexArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleFirestoreIndexArgs {
  api_scope?: string;
  collection: string;
  database?: string;
  query_scope?: string;
  fields: GoogleFirestoreIndexArgsFields[];
  timeouts?: GoogleFirestoreIndexArgsTimeouts;
}

export class google_firestore_index extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFirestoreIndexArgs) {
    const meta = {fields:{isBlock:true,vector_config:{isBlock:true,flat:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firestore_index", resourceName);
  }

  get collection(): string {
    return `${this.resourceType}.${this.resourceName}.collection`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
