import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleProjectArgs {
  auto_create_network?: boolean;
  billing_account?: string;
  deletion_policy?: string;
  folder_id?: string;
  labels?: { [key: string]: string };
  name: string;
  org_id?: string;
  project_id: string;
  tags?: { [key: string]: string };
  timeouts?: GoogleProjectArgsTimeouts;
}

export class google_project extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleProjectArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_project", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get number(): string {
    return `${this.resourceType}.${this.resourceName}.number`;
  }

  get project_id(): string {
    return `${this.resourceType}.${this.resourceName}.project_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
