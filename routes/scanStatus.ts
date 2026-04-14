/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response } from 'express'

export function retrieveScanStatus () {
  return (_req: Request, res: Response) => {
    res.json({
      totalVulnerabilities: 12,
      high: 3,
      medium: 5,
      low: 4
    })
  }
}
