import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreFederationArgsBackendMetastores {
  metastore_type: string;
  name: string;
  rank: string;
}

export interface GoogleDataprocMetastoreFederationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocMetastoreFederationArgs {
  federation_id: string;
  labels?: { [key: string]: string };
  location?: string;
  version: string;
  backend_metastores: GoogleDataprocMetastoreFederationArgsBackendMetastores[];
  timeouts?: GoogleDataprocMetastoreFederationArgsTimeouts;
}

export class google_dataproc_metastore_federation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocMetastoreFederationArgs) {
    const meta = {backend_metastores:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_federation", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get endpoint_uri(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_uri`;
  }

  get federation_id(): string {
    return `${this.resourceType}.${this.resourceName}.federation_id`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_message(): string {
    return `${this.resourceType}.${this.resourceName}.state_message`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
