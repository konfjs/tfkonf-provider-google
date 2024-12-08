import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAlloydbUserArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAlloydbUserArgs {
  cluster: string;
  database_roles?: string[];
  password?: string;
  user_id: string;
  user_type: string;
  timeouts?: GoogleAlloydbUserArgsTimeouts;
}

export class google_alloydb_user extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAlloydbUserArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_alloydb_user", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get user_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_id`;
  }

  get user_type(): string {
    return `${this.resourceType}.${this.resourceName}.user_type`;
  }
}
