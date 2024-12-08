import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOsLoginSshPublicKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOsLoginSshPublicKeyArgs {
  expiration_time_usec?: string;
  key: string;
  project?: string;
  user: string;
  timeouts?: GoogleOsLoginSshPublicKeyArgsTimeouts;
}

export class google_os_login_ssh_public_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleOsLoginSshPublicKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_os_login_ssh_public_key", resourceName);
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get user(): string {
    return `${this.resourceType}.${this.resourceName}.user`;
  }
}
