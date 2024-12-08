import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFolderArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface GoogleFolderArgs {
  deletion_protection?: boolean;
  display_name: string;
  parent: string;
  tags?: { [key: string]: string };
  timeouts?: GoogleFolderArgsTimeouts;
}

export class google_folder extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFolderArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_folder", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get folder_id(): string {
    return `${this.resourceType}.${this.resourceName}.folder_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_state(): string {
    return `${this.resourceType}.${this.resourceName}.lifecycle_state`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }
}
